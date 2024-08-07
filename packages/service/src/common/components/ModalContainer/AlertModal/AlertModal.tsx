import Modal from "react-modal";
import { Button, ButtonVariant } from "../../Button";
import { useScrollStop } from "@service/common/hooks/useScrollStop";
import { alertModalStyles, alertModalBodyStyles } from "./AlertModal.css";
import { ReactNode } from "react";
import { DefaultModalProps } from "../ModalContainer";

export interface AlertModalProps extends DefaultModalProps {
  title: ReactNode;
  content: ReactNode;
}

export const AlertModal = ({
  isOpen,
  onRequestClose,
  title,
  content,
}: AlertModalProps) => {
  useScrollStop(isOpen);

  return (
    <Modal
      shouldCloseOnEsc
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={alertModalStyles}
      ariaHideApp={false}
    >
      <div css={alertModalBodyStyles}>
        <h2>{title}</h2>
        <div>{content}</div>
        <Button variant={ButtonVariant.SHORT} onClick={onRequestClose}>
          확인
        </Button>
      </div>
    </Modal>
  );
};