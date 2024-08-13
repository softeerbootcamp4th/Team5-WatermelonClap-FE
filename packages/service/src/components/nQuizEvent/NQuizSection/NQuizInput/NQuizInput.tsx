import { useState, ChangeEvent, KeyboardEvent } from "react";
import { Button } from "@service/common/components/Button";
import { nQuizInputStyles, nQuizSubmitButtonStyles } from "./NQuizInput.css";
import { theme } from "@watermelon-clap/core";
import {
  IOrderEvent,
  IPostOrderEventResponse,
} from "@service/apis/orderEvent/type";
import { apiPostOrderEvent } from "@service/apis/orderEvent";
import { useModal } from "@service/common/hooks/useModal";
import { craftSideCannons } from "@service/common/utils/confettiCrafter";
import {
  MODAL_CONTENT_QUIZ_CLOSED,
  MODAL_CONTENT_QUIZ_WRONG,
  MODAL_N_QUIZ_TITLE,
} from "@service/common/components/ModalContainer/content/modalContent";
import { useErrorBoundary } from "react-error-boundary";

interface NQuizInputProps {
  openedQuiz: IOrderEvent;
}

export const NQuizInput = ({ openedQuiz }: NQuizInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { showBoundary } = useErrorBoundary();
  const { closeModal, openModal } = useModal();

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
        craftSideCannons(2);
        openModal({
          type: "alert",
          props: {
            title: MODAL_N_QUIZ_TITLE,
            content: "정답!! 너 재능있어~",
          },
        });
        break;
      case "WRONG":
        openModal({
          type: "navigate",
          props: {
            title: MODAL_N_QUIZ_TITLE,
            content: MODAL_CONTENT_QUIZ_WRONG,
          },
        });
        break;
      case "CLOSED":
        openModal({
          type: "alert",
          props: {
            title: MODAL_N_QUIZ_TITLE,
            content: MODAL_CONTENT_QUIZ_CLOSED,
          },
        });
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

  return (
    <div css={[theme.flex.between]}>
      <input
        css={nQuizInputStyles}
        placeholder="정답 입력하기"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyDown}
      />
      <Button css={nQuizSubmitButtonStyles} onClick={handleSubmit}>
        제출하기
      </Button>
    </div>
  );
};
