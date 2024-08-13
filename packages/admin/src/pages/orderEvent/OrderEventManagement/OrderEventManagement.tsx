import { apiGetOrderEvent } from "@admin/apis/orderEvent";
import { Button } from "@admin/common/components/Button";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import { useState } from "react";
import {
  mainContainerStyle,
  buttonContainerStyle,
  headerStyle,
} from "./OrderEventManagementcss";

interface OrderEvnetDataProps {
  id: string;
  startDate: string;
  endDate: string;
  status: string;
  reward: string;
  quizImgSrc: string | undefined;
  quizAnswer: string | undefined;
}

function mapDataToGrid(data: IOrderEvent[]): OrderEvnetDataProps[] {
  return data.map((item) => ({
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
  const { data: quizList } = useSuspenseQuery<IOrderEvent[]>({
    queryKey: ["orderEvent"],
    queryFn: () => apiGetOrderEvent(),
    staleTime: Infinity,
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
    { field: "quizAnswer", headerName: "퀴즈 정답", width: 160 },
    {
      field: "quizImgSrc",
      headerName: "퀴즈 이미지",
      width: 100,
      renderCell: (params) => (
        <div css={buttonContainerStyle}>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              openModal({ type: "image", props: { src: params.value } });
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
      renderCell: () => (
        <div css={buttonContainerStyle}>
          <Button
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            당첨자 보러가기
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div css={mainContainerStyle}>
      <div css={headerStyle}>
        <Button
          onClick={() => {
            console.log("선택된 퀴즈:", selectionModel);
            // todo 선택된 퀴즈 삭제 로직
          }}
        >
          선택 퀴즈 삭제
        </Button>
        <Button>퀴즈 생성</Button>
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
