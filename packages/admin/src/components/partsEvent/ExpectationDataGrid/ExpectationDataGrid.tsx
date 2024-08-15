import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IExpectation } from "@admin/apis/expectation/type";
import { useQuery } from "@tanstack/react-query";
import { apiGetExpectation } from "@admin/apis/expectation";
import Checkbox from "@mui/material/Checkbox";
import { ChangeEvent, useEffect, useState } from "react";
import { apiPostExpectation } from "@admin/apis/expectation/apiPostExpectaion";

function mapDataToGrid(data: IExpectation[] | undefined) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((item) => ({
    id: item.expectationId,
    uid: item.uid,
    time: item.uploadDate,
    content: item.expectation,
    approved: item.approved,
  }));
}

export const ExpectationDataGrid = () => {
  const { data: expectationList } = useQuery<IExpectation[]>({
    queryKey: ["expectationList"],
    queryFn: () => apiGetExpectation(),
  });

  const [gridData, setGridData] = useState(mapDataToGrid(expectationList));

  useEffect(() => {
    setGridData(mapDataToGrid(expectationList));
  }, [expectationList]);

  const handleCheckboxChange = (
    id: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    event.stopPropagation();
    apiPostExpectation(id).then((res) => console.log(res));

    setGridData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, approved: event.target.checked } : row,
      ),
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "uid", headerName: "user ID", width: 200 },
    { field: "time", headerName: "등록 시간", width: 200 },
    { field: "content", headerName: "기대평", width: 600 },
    {
      field: "approved",
      headerName: "게시 여부",
      width: 200,
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={(event) => handleCheckboxChange(params.row.id, event)}
        />
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={gridData} columns={columns} />
    </div>
  );
};
