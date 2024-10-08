import Modal from "react-modal";
import { Button, ButtonVariant } from "../../../Button";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import * as style from "./AlertModal.css";
import { ReactNode } from "react";
import { DefaultModalProps } from "../../ModalContainer";

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
      style={style.alertModalStyles}
      ariaHideApp={false}
    >
      <div css={style.alertModalBodyStyles}>
        {title}
        <div>{content}</div>
        <Button variant={ButtonVariant.SHORT} onClick={onRequestClose}>
          확인
        </Button>
      </div>
    </Modal>
  );
};
