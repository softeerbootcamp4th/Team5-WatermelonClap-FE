import { apiGetOrderEvent, apiDeleteOrderEvent } from "@admin/apis/orderEvent";
import { Button } from "@admin/common/components/Button";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import { useState } from "react";
import {
  mainContainerStyle,
  buttonContainerStyle,
  headerStyle,
} from "./OrderEventManagement.css";
import { useNavigate } from "react-router-dom";
import {
  ORDER_EVENT_GENERATION_PAGE_ROUTE,
  ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE,
} from "@admin/constants/routes";

function mapDataToGrid(data: IOrderEvent[] | undefined) {
  return data?.map((item) => ({
    id: item.eventId,
    startDate: item.startDate,
    endDate: item.endDate,
    status: item.status,
    reward: item.reward.name,
    quizImgSrc: item.quiz?.imgSrc,
    quizAnswer: item.quiz?.answer,
  }));
}

export const OrderEventManagement = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: quizList } = useQuery<IOrderEvent[]>({
    queryKey: ["orderEvent"],
    queryFn: () => apiGetOrderEvent(),
  });
  const { openModal } = useModal();
  const [selectionModel, setSelectionModel] = useState<readonly GridRowId[]>(
    [],
  );

  const data = mapDataToGrid(quizList);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "startDate", headerName: "오픈 날짜", width: 250 },
    { field: "endDate", headerName: "종료 날짜", width: 250 },
    { field: "status", headerName: "상태", width: 120 },
    { field: "reward", headerName: "상품", width: 220 },
    { field: "quizAnswer", headerName: "이벤트 정답", width: 160 },
    {
      field: "quizImgSrc",
      headerName: "이벤트 이미지",
      width: 100,
      renderCell: (params) => (
        <div css={buttonContainerStyle}>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              openModal({
                type: "image",
                props: { title: "이벤트 이미지", src: params.value },
              });
            }}
          >
            이미지
          </Button>
        </div>
      ),
    },
    {
      field: "showWinner",
      headerName: "당첨자 리스트",
      width: 200,
      renderCell: (params) => (
        <div css={buttonContainerStyle}>
          <Button
            onClick={(event) => {
              console.log(params.id);
              event.stopPropagation();
              navigate(ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE, {
                state: params.id,
              });
            }}
          >
            당첨자 보러가기
          </Button>
        </div>
      ),
    },
  ];

  const deleteMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      for (const id of ids) {
        await apiDeleteOrderEvent(id);
      }
    },
    onSuccess: () => {
      try {
        queryClient.invalidateQueries({ queryKey: ["orderEvent"] });
      } catch (error) {
        console.error("Failed to invalidate query:", error);
      }
    },
    onError: (error) => {
      console.error("Delete mutation failed:", error);
    },
  });

  const handleDeleteButtonClick = () => {
    openModal({
      type: "confirm",
      props: {
        title: "이벤트 삭제",
        content: "정말로 삭제하시겠습니까??",
        confirmEvent: handleDeleteSelected,
      },
    });
  };

  const handleDeleteSelected = () => {
    const idsToDelete = selectionModel.map((id) => id.toString());
    deleteMutation.mutate(idsToDelete);
  };

  return (
    <div css={mainContainerStyle}>
      <div css={headerStyle}>
        <Button
          onClick={handleDeleteButtonClick}
          disabled={selectionModel.length === 0 || deleteMutation.isPending}
        >
          {deleteMutation.isPending ? "삭제 중..." : "선택 이벤트 삭제"}
        </Button>
        <Button onClick={() => navigate(ORDER_EVENT_GENERATION_PAGE_ROUTE)}>
          이벤트 생성
        </Button>
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
        />
      </div>
    </div>
  );
};
