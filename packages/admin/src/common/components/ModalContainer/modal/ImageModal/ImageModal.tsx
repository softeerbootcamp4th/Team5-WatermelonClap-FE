import Modal from "react-modal";
import { Button } from "../../../Button";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import {
  imageModalStyles,
  imageModalBodyStyles,
  imageStyle,
} from "./ImageModal.css";
import { DefaultModalProps } from "../../ModalContainer";

export interface ImageModalProps extends DefaultModalProps {
  title: string;
  src: string;
}

export const ImageModal = ({
  isOpen,
  onRequestClose,
  title,
  src,
}: ImageModalProps) => {
  useScrollStop(isOpen);

  return (
    <Modal
      shouldCloseOnEsc
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={imageModalStyles}
      ariaHideApp={false}
    >
      <div css={imageModalBodyStyles}>
        <h2>{title}</h2>
        <img css={imageStyle} src={src} alt={title}></img>
        <Button onClick={onRequestClose}>확인</Button>
      </div>
    </Modal>
  );
};
