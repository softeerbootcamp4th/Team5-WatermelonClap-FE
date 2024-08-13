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
  src: string;
}

export const ImageModal = ({
  isOpen,
  onRequestClose,
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
        <h2>경품 이미지</h2>
        <img css={imageStyle} src={src} alt="격품 이미지"></img>
        <Button onClick={onRequestClose}>확인</Button>
      </div>
    </Modal>
  );
};
