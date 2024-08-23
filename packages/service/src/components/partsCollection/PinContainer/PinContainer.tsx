import React, { useState } from "react";
import { Pin } from "./Pin";
import { useMobile } from "@service/common/hooks/useMobile";
import { ICustomCardProps } from "@service/components/partsCollection/CustomCard/CustomCard";
import * as styles from "./PinContainer.css";
import { ClickInduceIcon } from "@service/common/components/ClickInduceIcon";

interface PinContainerProps {
  children: React.ReactNode;
  equippedParts: ICustomCardProps | undefined;
}

export const PinContainer = ({
  children,
  equippedParts,
}: PinContainerProps) => {
  const [perspectiveOpacity, setPerspectiveOpacity] = useState<number>(0);
  const [transform, setTransform] = useState<string>(
    "translate(-50%,-50%) rotateX(0deg) scale(1)",
  );
  const isMobile = useMobile();

  const onMouseEnter = () => {
    setTransform(
      `translate(-50%,-50%) rotateX(50deg) ${
        isMobile ? "scale(0.9)" : "scale(0.8)"
      }`,
    );
    setPerspectiveOpacity(1);
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setPerspectiveOpacity(0);
  };

  return (
    <div css={styles.mainContainer}>
      <div
        css={styles.pivotContainer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div css={styles.perspectiveContainer}>
          <div style={{ transform }} css={styles.innerContainer}>
            {children}
          </div>
        </div>
        {/* 색상 */}

        {equippedParts?.colorParts && (
          <Pin
            parts={equippedParts.colorParts}
            opacity={perspectiveOpacity}
            imgCss={styles.pinCommonImg}
            customCss={styles.pinCommonCustom}
          />
        )}
        {/* 배경 */}
        {equippedParts?.bgParts && (
          <Pin
            parts={equippedParts.bgParts}
            opacity={perspectiveOpacity}
            imgCss={styles.pinBgImg}
            customCss={styles.pinBgCustom}
          />
        )}
        {/* 휠 */}
        {equippedParts?.wheelParts && (
          <Pin
            parts={equippedParts.wheelParts}
            opacity={perspectiveOpacity}
            imgCss={styles.pinWheelImg}
            customCss={styles.pinWheelCustom}
          />
        )}
        {/* 스포일러 */}
        {equippedParts?.spoilerParts && (
          <Pin
            parts={equippedParts.spoilerParts}
            opacity={perspectiveOpacity}
            imgCss={styles.pinSpoilerImg}
            customCss={styles.pinSpoilerCustom}
          />
        )}

        {perspectiveOpacity === 0 && (
          <ClickInduceIcon text={isMobile ? "CLICK" : "HOVER"} />
        )}
      </div>
    </div>
  );
};
