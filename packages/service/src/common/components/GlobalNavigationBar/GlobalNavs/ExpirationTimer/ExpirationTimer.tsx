import { useState, useEffect } from "react";
import * as style from "./ExpirationTimer.css";
import { PiTimerBold } from "react-icons/pi";

interface IExpirationTimerProps {
  diffMs: number;
}

export const ExpirationTimer = ({ diffMs }: IExpirationTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(diffMs);
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

  if (remainingTime <= 0) {
    return <span>Expired</span>;
  }

  const diffMins = String(
    Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
  ).padStart(2, "0");
  const diffSecs = String(
    Math.floor((remainingTime % (1000 * 60)) / 1000),
  ).padStart(2, "0");

  return (
    <span css={style.timer}>
      <PiTimerBold />
      {diffMins} : {diffSecs}
    </span>
  );
};
