import { useState } from "react";
import { Button } from "@admin/common/components/Button";
import { css } from "@emotion/react";
import {
  mainContainerStyle,
  buttonStyles,
  drawButtonStyles,
} from "./PartsEventDraw.css";
import {
  MainEventDrawForm,
  MiniatureEventDrawFrom,
} from "@admin/components/partsEvent";
import { Space } from "@admin/common/components/Space";
import { apiPostLottries } from "@admin/apis/partsEvent/apiPostLotteries";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { apiPostPartsEventWinner } from "@admin/apis/partsEvent/apiPostPartsEventWinner";

export const PartsEventDraw = () => {
  const [activeTab, setActiveTab] = useState<"main" | "miniature">("main");
  const { openModal } = useModal();

  const handleDrawButtonClick = () => {
    if (activeTab === "main") {
      handleDrawMainEvent();
    } else {
      handleDrawMiniatureEvent();
    }
  };

  const handleDrawMainEvent = () => {
    apiPostLottries().then((res) => {
      if (res.ok) {
        openModal({
          type: "alert",
          props: {
            title: "아반떼 N 추첨 이벤트",
            content: "당첨자 뽑기가 완료되었습니다!",
          },
        });
      }
    });
  };

  const handleDrawMiniatureEvent = () => {
    apiPostPartsEventWinner().then((res) => {
      if (res.ok) {
        openModal({
          type: "alert",
          props: {
            title: "미니어처 추첨 이벤트",
            content: "당첨자 뽑기가 완료되었습니다!",
          },
        });
      }
    });
  };

  return (
    <div css={mainContainerStyle}>
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: start;
          gap: 10px;
        `}
      >
        <Button
          onClick={() => setActiveTab("main")}
          css={buttonStyles(activeTab === "main")}
        >
          응모 이벤트
        </Button>
        <Button
          onClick={() => setActiveTab("miniature")}
          css={buttonStyles(activeTab === "miniature")}
        >
          미니어처 이벤트
        </Button>
      </div>
      <div
        css={css`
          width: 100%;
          height: 60%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        `}
      >
        {activeTab === "main" && <MainEventDrawForm />}

        {activeTab === "miniature" && <MiniatureEventDrawFrom />}

        <Space size={5} />
        <Button css={drawButtonStyles} onClick={handleDrawButtonClick}>
          추첨하기
        </Button>
      </div>
    </div>
  );
};
