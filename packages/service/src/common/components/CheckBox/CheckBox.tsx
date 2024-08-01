import { motion } from "framer-motion";
import {
  checkBoxContainerStyle,
  checkBoxButtonStyle,
  checkBoxLabelStyle,
  checkBoxStyle,
  checkBoxSvgStyle,
} from "./CheckBox.css";

interface CheckBoxProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  text: string;
}

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * CheckBox의 checked 상태는 외부에서 받아온 상태를 사용한다.
 * Label에 해당하는 부분은 string만 들어오는 것으로 설정
 */
export const CheckBox = ({ isChecked, setIsChecked, text }: CheckBoxProps) => {
  return (
    <div css={checkBoxContainerStyle}>
      <button
        css={checkBoxButtonStyle}
        onClick={() => setIsChecked(!isChecked)}
      >
        <div css={checkBoxStyle(isChecked)}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="currentColor"
            css={checkBoxSvgStyle}
            initial={false}
            animate={isChecked ? "checked" : "unchecked"}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
              variants={tickVariants}
            />
          </motion.svg>
        </div>
      </button>
      <motion.label
        css={checkBoxLabelStyle}
        animate={{
          x: isChecked ? [0, -4, 0] : [0, 4, 0],
        }}
        initial={false}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {text}
      </motion.label>
    </div>
  );
};
