import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { PiMouseLeftClickFill } from "react-icons/pi";
import { theme } from "@watermelon-clap/core/src/theme";
import { mobile } from "@service/common/responsive/responsive";
import { useMobile } from "@service/common/hooks/useMobile";

export interface ClickInduceIconProps {
  text: string;
}

export const ClickInduceIcon = ({ text }: ClickInduceIconProps) => {
  const isMobile = useMobile();
  return (
    <motion.div
      css={css`
        position: relative;
        top: 10px;
        z-index: 2;

        ${mobile(css`
          top: 20px;
        `)}
      `}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      animate={{
        y: isMobile ? -70 : -100,
      }}
    >
      <div
        css={[
          theme.flex.column,
          css`
            color: ${theme.color.gray100};
            gap: 4px;
            filter: drop-shadow(0px 0px 5px #fff);
          `,
        ]}
      >
        <PiMouseLeftClickFill size={isMobile ? 30 : 40} />
        <h4
          css={[
            theme.font.pcpB,
            css`
              margin-top: 4px;

              ${mobile(css`
                font-size: 12px;
              `)}
            `,
          ]}
        >
          {text}
        </h4>
      </div>
    </motion.div>
  );
};
