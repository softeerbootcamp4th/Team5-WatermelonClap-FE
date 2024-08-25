import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as style from "./ClipBoardButton.css";
import { ReactComponent as ClipBoardIcon } from "public/icons/clipboard.svg";

interface IClipBoardButton {
  copyRef: any;
}
const ClipBoardButton = ({ copyRef }: IClipBoardButton) => {
  const [isCliped, setIsCliped] = useState<boolean>(false);
  const initialText = "클립보드에 복사";
  const changeText = "복사되었습니다!";

  const handleCopy = () => {
    const textToCopy = copyRef?.current?.textContent;
    navigator.clipboard.writeText(textToCopy as string);
  };

  return (
    <div onClick={handleCopy}>
      <AnimatePresence mode="wait">
        {isCliped ? (
          <motion.button
            css={style.clipButtonSuccessStyle}
            onClick={() => setIsCliped(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              css={style.clipButtonSuccessContentStyle}
              key="action"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
            >
              <ClipBoardIcon />
              {changeText}
            </motion.span>
          </motion.button>
        ) : (
          <motion.button
            css={style.clipButtonStyle}
            onClick={() => setIsCliped(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              css={style.clipButtonContentStyle}
              key="reaction"
              initial={{ x: 0 }}
              exit={{ x: 50, transition: { duration: 0.1 } }}
            >
              <ClipBoardIcon />
              {initialText}
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClipBoardButton;
