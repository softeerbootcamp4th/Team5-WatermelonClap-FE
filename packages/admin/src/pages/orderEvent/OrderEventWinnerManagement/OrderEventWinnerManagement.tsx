import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { mainContainerStyle } from "./OrderEventWinnerMagement.css";
import { Winner } from "@admin/apis/orderEvent/type";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import {
  apiGetOrderEvent,
  apiGetOrderEventWinner,
} from "@admin/apis/orderEvent";
import { useLocation } from "react-router-dom";

function mapId(data: IOrderEvent[] | undefined) {
  return data?.map((item) => ({
    id: item.eventId,
  }));
}

export const OrderEventWinnerManagement = () => {
  const location = useLocation();
  const [eventId, setEventID] = useState(location.state);

  const { data: quizList } = useQuery<IOrderEvent[]>({
    queryKey: ["orderEvent"],
    queryFn: () => apiGetOrderEvent(),
    staleTime: Infinity,
  });

  const { data: winnerList = [], error } = useQuery<Winner[]>({
    queryKey: ["winnerList", eventId],
    queryFn: () => apiGetOrderEventWinner(eventId),
    staleTime: Infinity,
  });

  const eventIdList = mapId(quizList);

  const winnerListWithId =
    error || winnerList.length === 0
      ? []
      : winnerList.map((winner, index) => ({
          ...winner,
          id: index,
        }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "phoneNumber", headerName: "전화번호", width: 250 },
    { field: "applyDate", headerName: "시간", width: 250 },
    { field: "applyAnswer", headerName: "정답", width: 120 },
  ];

  return (
    <div css={mainContainerStyle}>
      {/* 탭 UI */}
      <div style={{ display: "flex", marginBottom: 20 }}>
        {eventIdList?.map((event) => (
          <div
            key={event.id}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: event.id === eventId ? "#000" : "#f0f0f0",
              color: event.id === eventId ? "#fff" : "#000",
              borderRadius: 4,
              marginRight: 10,
            }}
            onClick={() => setEventID(event.id)}
          >
            Event ID: {event.id}
          </div>
        ))}
      </div>

      {/* 데이터 그리드 */}
      <div
        style={{
          height: 400,
          width: "fit-content",
        }}
      >
        <DataGrid rows={winnerListWithId} columns={columns} />
      </div>
    </div>
  );
};
