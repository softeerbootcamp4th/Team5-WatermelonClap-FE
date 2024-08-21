import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { PiMouseLeftClickFill } from "react-icons/pi";
import { theme } from "@watermelon-clap/core/src/theme";

export const ClickInduceIcon = () => {
  return (
    <motion.div
      css={css`
        position: relative;
        top: 60px;
        z-index: 2;
      `}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      animate={{
        y: -100,
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
        <PiMouseLeftClickFill size={40} />
        <h4
          css={[
            theme.font.pcpB,
            css`
              margin-top: 4px;
            `,
          ]}
        >
          CLICK
        </h4>
      </div>
    </motion.div>
  );
};
