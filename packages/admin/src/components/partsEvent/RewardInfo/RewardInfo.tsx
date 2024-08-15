import { css } from "@emotion/react";
import { TextField } from "@mui/material";
import { LabelWrapper, Label } from "./RewardInfo.css";

interface RewardInfoProps {
  rank: number;
  winnerCount: number;
  reward: string;
}

export const RewardInfo = ({ rank, winnerCount, reward }: RewardInfoProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        gap: 50px;
      `}
    >
      <LabelWrapper>
        <Label htmlFor="max-participants">{rank}등</Label>
      </LabelWrapper>

      <TextField type="text" value={winnerCount} disabled />

      <TextField type="text" value={reward} disabled fullWidth />
    </div>
  );
};
