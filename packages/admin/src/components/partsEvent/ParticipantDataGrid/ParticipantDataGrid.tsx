import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  IGetPartsEventResponse,
  IParticipant,
} from "@admin/apis/partsEvent/type";
import { useQuery } from "@tanstack/react-query";
import { apiGetPartsEventParticipant } from "@admin/apis/partsEvent";

function mapDataToGrid(data: IParticipant[] | undefined) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((item) => ({
    id: item.uid,
    link: item.link,
    remainChance: item.remainChance,
    rank: item.rank === -1 ? "x" : item.rank,
  }));
}

export const ParticipantDataGrid = () => {
  const { data: participantList } = useQuery<IGetPartsEventResponse>({
    queryKey: ["participantList"],
    queryFn: () => apiGetPartsEventParticipant(0, 0),
    staleTime: Infinity,
  });

  const gridData = mapDataToGrid(participantList?.content);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 400 },
    { field: "link", headerName: "URL", width: 400 },
    { field: "remainChance", headerName: "파츠 뽑기권 개수", width: 200 },
    { field: "rank", headerName: "당첨 여부", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={gridData} columns={columns} />
    </div>
  );
};
