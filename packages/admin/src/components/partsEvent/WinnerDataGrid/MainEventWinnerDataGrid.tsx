import { apiGetLotteries } from "@admin/apis/partsEvent/apiGetLotteries";
import { apiPostLotteriesCheckStatus } from "@admin/apis/partsEvent/apiPostLotteriesCheckStatus";
import { IWinner } from "@admin/apis/partsEvent/type";
import { Checkbox } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";

function mapDataToGrid(data: IWinner[] | undefined) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((item) => ({
    rank: item.rank,
    reward: item.reward,
    id: item.uid,
    email: item.email,
    name: item.name,
    phoneNumber: item.phoneNumber,
    address: item.address,
    status: item.status,
  }));
}

export const MainEventWinnerDataGrid = () => {
  const { data: winnerList } = useQuery<IWinner[]>({
    queryKey: ["mainEventWinnerList"],
    queryFn: () => apiGetLotteries(),
  });

  const [gridData, setGridData] = useState(mapDataToGrid(winnerList));

  const columns: GridColDef[] = [
    { field: "rank", headerName: "순위", width: 60 },
    { field: "reward", headerName: "경품", width: 200 },
    { field: "email", headerName: "수령인 이메일", width: 280 },
    { field: "name", headerName: "수령인 이름", width: 200 },
    { field: "phoneNumber", headerName: "수령인 핸드폰번호", width: 200 },
    { field: "address", headerName: "수령인 주소", width: 200 },
    {
      field: "status",
      headerName: "담당자 확인 정보",
      width: 200,
      renderCell: (params) => (
        <Checkbox
          checked={params.value === "READY"}
          onChange={(event) => {
            handleCheckboxChange(params.row.id, event);
          }}
        />
      ),
    },
  ];

  const handleCheckboxChange = (
    id: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    event.stopPropagation();
    apiPostLotteriesCheckStatus(id);

    setGridData((prevData) =>
      prevData.map((row) =>
        row.id === id
          ? { ...row, status: event.target.checked ? "READY" : "DONE" }
          : row,
      ),
    );
  };

  useEffect(() => {
    setGridData(mapDataToGrid(winnerList));
  }, [winnerList]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={gridData} columns={columns} />
    </div>
  );
};
