import Modal from "react-modal";
import { Button } from "../../../Button";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import * as style from "./DescriptionModal.css";
import { DefaultModalProps } from "../../ModalContainer";

export interface DescriptionModalProps extends DefaultModalProps {
  src: string;
  name: string;
  description: string;
}

export const DescriptionModal = ({
  isOpen,
  onRequestClose,
  src,
  name,
  description,
}: DescriptionModalProps) => {
  useScrollStop(isOpen);

  return (
    <Modal
      shouldCloseOnEsc
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style.descriptionModalStyles}
      ariaHideApp={false}
    >
      <div css={style.descriptionModalBodyStyles}>
        <img css={style.imageStyle} src={src} alt={name}></img>
        <h2>{name}</h2>
        <p css={style.descriptionStyle}>{description}</p>
        <Button onClick={onRequestClose}>확인</Button>
      </div>
    </Modal>
  );
};
