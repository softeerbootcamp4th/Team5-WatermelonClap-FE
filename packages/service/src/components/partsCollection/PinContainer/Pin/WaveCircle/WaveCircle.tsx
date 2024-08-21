import { motion } from "framer-motion";
import {
  animationVariants,
  circleStyle,
  containerStyle,
} from "./WaveCircle.css";

export const WaveCircle = () => {
  const circleCount = 3; // 생성할 원의 개수
  const delayIncrement = 2; // delay 증가 값

  return (
    <div css={containerStyle}>
      {Array.from({ length: circleCount }).map((_, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * delayIncrement,
          }}
          css={circleStyle}
        />
      ))}
    </div>
  );
};
