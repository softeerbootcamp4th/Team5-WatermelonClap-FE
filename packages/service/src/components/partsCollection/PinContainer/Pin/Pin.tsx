import { motion } from "framer-motion";
import * as style from "./Pin.css";
import { WaveCircle } from "./WaveCircle";
import { SerializedStyles } from "@emotion/react";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { IParts } from "@watermelon-clap/core/src/types";

interface PinMarkerProps {
  parts?: IParts;
  opacity: number;
  customCss?: SerializedStyles;
  imgCss?: SerializedStyles;
}

export const Pin = ({ parts, opacity, customCss, imgCss }: PinMarkerProps) => {
  const { openModal } = useModal();

  const handleDescriptionButtonClick = () => {
    openModal({
      type: "description",
      props: {
        src: parts?.thumbnailImgSrc,
        name: parts?.name,
        description: parts?.description,
      },
    });
  };

  return (
    <motion.div css={[style.pinContainer(opacity), customCss]}>
      {/* PinItem */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        css={style.pinItemContainer}
        onClick={handleDescriptionButtonClick}
      >
        <div css={style.pinItem}>
          <img
            src={
              parts?.category === "COLOR" || parts?.category === "DRIVE_MODE"
                ? parts?.imgSrc
                : parts?.thumbnailImgSrc
            }
            alt="파츠 이미지"
            css={imgCss}
          />
          <span css={style.pinItemBottom} />
        </div>
      </motion.div>
      {/* Line */}
      <motion.div css={style.pinLine} />
      {/* Circle */}
      <WaveCircle />
    </motion.div>
  );
};
