import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IWinnerDataGrid {
  rank: number;
  reward: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  approved: boolean;
}

const columns: GridColDef[] = [
  { field: "rank", headerName: "ID", width: 60 },
  { field: "reward", headerName: "경품", width: 200 },
  { field: "id", headerName: "수령인 ID", width: 200 },
  { field: "name", headerName: "수령인 이름", width: 200 },
  { field: "email", headerName: "수령인 이메일", width: 200 },
  { field: "phone", headerName: "수령인 핸드폰번호", width: 200 },
  { field: "address", headerName: "수령인 주소", width: 200 },
  { field: "approved", headerName: "담당자 확인 정보", width: 200 },
];

export const WinnerDataGrid = () => {
  const gridData: IWinnerDataGrid[] = []; // todo api get

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={gridData} columns={columns} />
    </div>
  );
};
