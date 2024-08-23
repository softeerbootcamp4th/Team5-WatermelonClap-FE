import { useState, useEffect } from "react";
import * as style from "./ExpirationTimer.css";
import { PiTimerBold } from "react-icons/pi";
import { useAuth, useModal } from "@watermelon-clap/core/src/hooks";
import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

interface IExpirationTimerProps {
  diffMs: number;
}

export const ExpirationTimer = ({ diffMs }: IExpirationTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(diffMs);

  const { refresh, getExpirationTime } = useAuth();

  const handleRefreshToken = () => {
    openModal({
      type: "confirm",
      props: {
        title: "로그인",
        content: "로그인을 연장하시겠습니까?",
        confirmEvent: () => {
          refresh()?.then(() =>
            setRemainingTime(getExpirationTime() as number),
          );
        },
      },
    });
  };
  const { openModal } = useModal();
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
          transition: all 0.2s;
          :hover {
            color: ${theme.color.gray200};
          }
        `}
      >
        연장
      </span>
    </span>
  );
};
