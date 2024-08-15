import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IExpectation } from "@admin/apis/expectation/type";
import { useQuery } from "@tanstack/react-query";
import { apiGetExpectation } from "@admin/apis/expectation/apiGetExpectation";

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
    queryKey: ["participantList"],
    queryFn: () => apiGetExpectation(),
    staleTime: Infinity,
  });

  const gridData = mapDataToGrid(expectationList);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "uid", headerName: "user ID", width: 200 },
    { field: "time", headerName: "등록 시간", width: 200 },
    { field: "content", headerName: "기대평", width: 400 },
    { field: "approved", headerName: "게시 여부", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={gridData} columns={columns} />
    </div>
  );
};
