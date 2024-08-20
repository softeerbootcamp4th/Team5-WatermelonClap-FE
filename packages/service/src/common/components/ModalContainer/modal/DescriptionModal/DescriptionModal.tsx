import Modal from "react-modal";
import { Button } from "../../../Button";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import {
  descriptionModalStyles,
  descriptionModalBodyStyles,
  imageStyle,
  descriptionStyle,
} from "./DescriptionModal.css";
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
      style={descriptionModalStyles}
      ariaHideApp={false}
    >
      <div css={descriptionModalBodyStyles}>
        <img css={imageStyle} src={src} alt={name}></img>
        <h2>{name}</h2>
        <p css={descriptionStyle}>{description}</p>
        <Button onClick={onRequestClose}>확인</Button>
      </div>
    </Modal>
  );
};
