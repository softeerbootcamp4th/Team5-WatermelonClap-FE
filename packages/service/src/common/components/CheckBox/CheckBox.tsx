import { ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import { motion } from "framer-motion";
import {
  checkBoxContainerStyle,
  checkBoxButtonStyle,
  checkBoxLabelStyle,
  checkBoxSvgStyle,
  checkBoxStyle,
} from "./CheckBox.css";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  text: string;
  interpolation?: {
    labelStyle?: SerializedStyles;
    checkBoxStyle?: (isChecked: boolean) => SerializedStyles;
    svgStyle?: SerializedStyles;
  };
  svgIcon?: ReactNode;
}

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.2, delay: 0.2 },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

/**
 * CheckBox 컴포넌트는 외부에서 받은 상태를 사용하여 체크 여부를 제어합니다.
 * text는 체크박스의 레이블 텍스트입니다 string을 받습니다.
 * interpolation을 통해 체크박스의 스타일을 보간할 수 있습니다.
 * svgIcon을 통해 사용자 정의 SVG 아이콘을 제공할 수 있습니다.
 */
export const CheckBox = ({
  isChecked,
  setIsChecked,
  text,
  interpolation = {},
  svgIcon,
  ...props
}: CheckBoxProps) => {
  return (
    <div
      css={checkBoxContainerStyle}
      {...props}
      onClick={() => setIsChecked(!isChecked)}
    >
      <button css={checkBoxButtonStyle}>
        <div
          css={[
            checkBoxStyle(isChecked),
            interpolation.checkBoxStyle?.(isChecked),
          ]}
        >
          {svgIcon && isChecked ? (
            svgIcon
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="currentColor"
              css={[checkBoxSvgStyle, interpolation.svgStyle]}
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
          )}
        </div>
      </button>
      <motion.label
        css={[checkBoxLabelStyle, interpolation.labelStyle]}
        animate={{ x: isChecked ? [0, -4, 0] : [0, 4, 0] }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {text}
      </motion.label>
    </div>
  );
};
