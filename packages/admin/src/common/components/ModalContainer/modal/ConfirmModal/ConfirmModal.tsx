import Modal from "react-modal";
import { Button } from "../../../Button";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import { confirmModalStyles, confirmModalBodyStyles } from "./ConfirmModal.css";
import { ReactNode } from "react";
import { DefaultModalProps } from "../../ModalContainer";

export interface ConfirmModalProps extends DefaultModalProps {
  title: ReactNode;
  content: ReactNode;
}

export const ConfirmModal = ({
  isOpen,
  onRequestClose,
  title,
  content,
}: ConfirmModalProps) => {
  useScrollStop(isOpen);

  return (
    <Modal
      shouldCloseOnEsc
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={confirmModalStyles}
      ariaHideApp={false}
    >
      <div css={confirmModalBodyStyles}>
        {title}
        <div>{content}</div>
        <Button onClick={onRequestClose}>확인</Button>
      </div>
    </Modal>
  );
};
