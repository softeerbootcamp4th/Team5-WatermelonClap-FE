import { useState, useEffect } from "react";
import * as style from "./ExpirationTimer.css";
import { PiTimerBold } from "react-icons/pi";
import { useAuth } from "@watermelon-clap/core/src/hooks";
import { css } from "@emotion/react";

interface IExpirationTimerProps {
  diffMs: number;
}

export const ExpirationTimer = ({ diffMs }: IExpirationTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(diffMs);

  const { refresh, getExpirationTime } = useAuth();

  const handleRefreshToken = () => {
    refresh()?.then(() => setRemainingTime(getExpirationTime() as number));
  };

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(timerId);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [remainingTime]);

  const diffMins = String(
    Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
  ).padStart(2, "0");

  const diffSecs = String(
    Math.floor((remainingTime % (1000 * 60)) / 1000),
  ).padStart(2, "0");

  return (
    <span css={style.timer}>
      <PiTimerBold />
      {remainingTime <= 0 ? (
        <div>로그인 만료</div>
      ) : (
        <div>
          {diffMins} : {diffSecs}
        </div>
      )}
      |
      <span
        onClick={handleRefreshToken}
        css={css`
          cursor: pointer;
        `}
      >
        갱신
      </span>
    </span>
  );
};
