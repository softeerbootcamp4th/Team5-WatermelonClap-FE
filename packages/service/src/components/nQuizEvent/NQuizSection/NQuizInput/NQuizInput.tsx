import { useState, ChangeEvent, KeyboardEvent } from "react";
import { Button } from "@service/common/components/Button";
import * as style from "./NQuizInput.css";
import {
  IOrderEvent,
  IPostOrderEventResponse,
} from "@watermelon-clap/core/src/types";
import { theme } from "@watermelon-clap/core/src/theme";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { apiPostOrderEvent } from "@service/apis/orderEvent";
import { craftSideCannons } from "@service/common/utils/confettiCrafter";
import {
  MODAL_CONTENT_QUIZ_CLOSED,
  MODAL_CONTENT_QUIZ_WRONG,
  MODAL_N_QUIZ_TITLE,
} from "@service/common/components/ModalContainer/content/modalContent";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { N_QUIZ_EVENT_PAGE_WINNER_APLLY_PAGE_ROUTE } from "@service/constants/routes";

interface NQuizInputProps {
  openedQuiz: IOrderEvent;
}

export const NQuizInput = ({ openedQuiz }: NQuizInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { showBoundary } = useErrorBoundary();
  const { closeModal, openModal } = useModal();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;

    openModal({ type: "pending" });

    const requestPayload = {
      answer: inputValue,
      eventId: openedQuiz.eventId,
      quizId: openedQuiz.quiz?.quizId as string,
    };

    apiPostOrderEvent(requestPayload)
      .then(handleApiResponse)
      .catch(handleApiError);

    setInputValue("");
  };

  const handleApiResponse = (response: IPostOrderEventResponse) => {
    switch (response.result) {
      case "SUCCESS":
        handleSuccessResponse(response.applyTicket as string);
        break;
      case "WRONG":
        handleWrongResponse();
        break;
      case "CLOSED":
        handleClosedResponse();
        break;
    }
  };

  const handleApiError = (error: Error) => {
    closeModal();
    showBoundary(error);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSuccessResponse = (applyTicket: string) => {
    localStorage.setItem("ApplyTicket", applyTicket);
    closeModal();
    navigate(N_QUIZ_EVENT_PAGE_WINNER_APLLY_PAGE_ROUTE);
    craftSideCannons(2);
  };

  const handleWrongResponse = () => {
    openModal({
      type: "navigate",
      props: {
        title: MODAL_N_QUIZ_TITLE,
        content: MODAL_CONTENT_QUIZ_WRONG,
      },
    });
  };

  const handleClosedResponse = () => {
    openModal({
      type: "alert",
      props: {
        title: MODAL_N_QUIZ_TITLE,
        content: MODAL_CONTENT_QUIZ_CLOSED,
      },
    });
  };

  return (
    <div css={[theme.flex.between]}>
      <input
        css={style.nQuizInputStyles}
        placeholder="정답 입력하기"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyDown}
        disabled={openedQuiz.status === "OPEN" ? false : true}
      />
      <Button
        css={style.nQuizSubmitButtonStyles}
        onClick={handleSubmit}
        disabled={openedQuiz.status === "OPEN" ? false : true}
      >
        제출하기
      </Button>
    </div>
  );
};
