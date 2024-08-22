import { useMobile } from "@service/common/hooks/useMobile";
import * as style from "./PartsCard.css";
import { IParts } from "@watermelon-clap/core/src/types";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { motion } from "framer-motion";

interface IPartsCardProps {
  partsData: IParts;
}

export const PartsCard = ({ partsData }: IPartsCardProps) => {
  const isMobile = useMobile();
  const { openModal } = useModal();

  const handleCardClick = () => {
    openModal({
      type: "description",
      props: {
        src: partsData.thumbnailImgSrc,
        name: partsData.name,
        description: partsData.description,
      },
    });
  };

  return (
    <motion.div
      css={style.container}
      onClick={handleCardClick}
      whileHover={{ scale: 1.1 }}
    >
      <div css={style.card}>
        <img
          src={partsData.thumbnailImgSrc}
          css={style.img(partsData.category)}
        />
      </div>
      {isMobile ? <span css={style.name}>{partsData.name}</span> : <></>}
    </motion.div>
  );
};
