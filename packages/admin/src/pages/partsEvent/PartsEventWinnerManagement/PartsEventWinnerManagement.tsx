import { useState } from "react";
import {
  mainContainerStyle,
  buttonStyles,
} from "./PartsEventWinnerManagement.css";
import { css } from "@emotion/react";
import { Button } from "@admin/common/components/Button";
import {
  MiniatureEventWinnerDataGrid,
  MainEventWinnerDataGrid,
} from "@admin/components/partsEvent";

export const PartsEventWinnerManagement = () => {
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
        {activeTab === "main" && <MainEventWinnerDataGrid />}

        {activeTab === "miniature" && <MiniatureEventWinnerDataGrid />}
      </div>
    </div>
  );
};
