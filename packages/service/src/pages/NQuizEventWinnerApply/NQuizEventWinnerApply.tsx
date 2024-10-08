import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { apiGetOrderEvent } from "@service/apis/orderEvent";
import { apiPostOrderEventApply } from "@service/apis/orderEvent/apiPostOrderEventApply";
import { phoneNumberAutoFormat } from "@service/common/utils";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import { NQuizReward } from "@service/components/nQuizEvent";
import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import { CheckBox } from "@service/common/components/CheckBox";
import { Button } from "@service/common/components/Button";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";
import * as style from "./NQuizEventWinnerApply.css";
import { useModal } from "@watermelon-clap/core/src/hooks";
import {
  MODAL_CONTENT_ORDER_EVENT_APPLY_DUPPLICATION,
  MODAL_CONTENT_ORDER_EVENT_APPLY_SUCCESS,
  MODAL_N_QUIZ_TITLE,
} from "@service/common/components/ModalContainer/content/modalContent";
import { isValidPhoneNumber } from "@service/common/utils/regex";
import { Helmet } from "react-helmet";

export const NQuizEventWinnerApply = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(true);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const { data: quizList } = useSuspenseQuery<IOrderEvent[]>({
    queryKey: ["orderEvent"],
    queryFn: () => apiGetOrderEvent(),
    staleTime: Infinity,
  });

  const openedQuiz = quizList.find(
    (quiz) => quiz.status === "OPEN",
  ) as IOrderEvent;

  const handleSubmit = () => {
    if (!localStorage.getItem("ApplyTicket") || !openedQuiz) {
      alert("올바른 접근이 아닙니다.");
      return;
    }
    if (phoneNumber === "") {
      alert("전화번호를 입력해주세요");
      return;
    }
    if (!isChecked) {
      alert("약관에 동의해주세요.");
      return;
    }

    apiPostOrderEventApply({
      eventId: openedQuiz.eventId,
      quizId: openedQuiz.quiz?.quizId as string,
      phoneNumber: phoneNumber.replace(/-/g, ""),
      appplyTicket: localStorage.getItem("ApplyTicket") as string,
    }).then((response) => {
      if (response.ok) {
        openModal({
          type: "alert",
          props: {
            title: MODAL_N_QUIZ_TITLE,
            content: MODAL_CONTENT_ORDER_EVENT_APPLY_SUCCESS,
          },
        });
      } else {
        openModal({
          type: "alert",
          props: {
            title: MODAL_N_QUIZ_TITLE,
            content: MODAL_CONTENT_ORDER_EVENT_APPLY_DUPPLICATION,
          },
        });
      }
    });
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setPhoneNumber(targetValue);
    setIsPhoneNumberValid(isValidPhoneNumber(targetValue));
  };

  useEffect(() => {
    if (!localStorage.getItem("ApplyTicket")) {
      alert("권한이 없습니다.");
      navigate(MAIN_PAGE_ROUTE);
    }
  }, [navigate]);

  useEffect(() => {
    if (isValidPhoneNumber(phoneNumber) && isChecked) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [phoneNumber, isChecked]);

  return (
    <>
      <Helmet>
        <title>
          선착순 이벤트 당첨자 | 현대자동차 - 아반떼 N 2024 | 고성능 컴팩트
          스포츠카
        </title>
        <meta name="description" content="선착순 이벤트 당첨자 페이지" />
      </Helmet>
      <div css={style.backgroundStyle}>
        <div css={style.logoContainerStyle}>
          <NLogo css={style.logoStyle} />
          <span css={style.titleStyle}>퀴즈</span>
        </div>
        <div css={style.centeredContainerStyle}>
          <div css={style.rewardContainerStyle}>
            <NQuizReward
              imgSrc={openedQuiz.reward.imgSrc}
              name={openedQuiz.reward.name}
              startDate={openedQuiz.startDate}
              status={openedQuiz.status}
            />
          </div>
        </div>

        <div css={style.contentContainerStyle}>
          <div css={style.cheersTextStyle}>축하드립니다!</div>
          <div css={style.contentTextStyle}>
            선착순 이벤트 대상자에 선정되었습니다!
          </div>
          <div css={style.contentTextStyle}>
            아래 칸에 휴대폰 번호를 입력해주세요.
          </div>
        </div>

        <div css={style.inputContainerStyle}>
          <input
            autoFocus
            css={style.inputStyle(isPhoneNumberValid)}
            placeholder="전화번호 입력"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type="tel"
            maxLength={13}
          />
        </div>

        <div css={style.termListWrapStyle}>
          <CheckBox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            text="개인정보 수집 및 이용 약관에 동의합니다. (이벤트 참가자 식별 및 경품 발송)"
          />
          <ul css={style.listStyle}>
            <li css={style.listItemStyle}>
              경품은 추후 문자를 통해 발송됩니다.
            </li>
            <li css={style.listItemStyle}>
              번호 제출 전 페이지를 이탈하면 당첨이 취소됩니다.
            </li>
          </ul>
        </div>

        <Button
          css={style.submitButtonStyle}
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          제출하기
        </Button>
      </div>
    </>
  );
};
