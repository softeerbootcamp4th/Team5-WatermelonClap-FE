import { useState } from "react";
import { Button } from "@admin/common/components/Button";
import { ParticipantDataGrid } from "@admin/components/partsEvent";
import { css } from "@emotion/react";
import {
  mainContainerStyle,
  buttonStyles,
} from "./PartsEventParticipantManagement.css";
import { ExpectationDataGrid } from "@admin/components/partsEvent/ExpectationDataGrid";

export const PartsEventParticipantManagement = () => {
  const [activeTab, setActiveTab] = useState("participants");

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
          onClick={() => setActiveTab("participants")}
          css={buttonStyles(activeTab === "participants")}
        >
          참여자 관리
        </Button>
        <Button
          onClick={() => setActiveTab("reviews")}
          css={buttonStyles(activeTab === "reviews")}
        >
          기대평 관리
        </Button>
      </div>

      {activeTab === "participants" && <ParticipantDataGrid />}

      {activeTab === "reviews" && <ExpectationDataGrid />}
    </div>
  );
};
