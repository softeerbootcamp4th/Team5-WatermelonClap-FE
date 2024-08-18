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

export const PartsEventDraw = () => {
  const [activeTab, setActiveTab] = useState<"main" | "miniature">("main");

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
        <Button css={drawButtonStyles}>추첨하기</Button>
      </div>
    </div>
  );
};
