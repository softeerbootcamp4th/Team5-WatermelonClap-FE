import Modal from "react-modal";
import { Button } from "../../../Button";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import {
  confirmModalStyles,
  confirmModalBodyStyles,
  btn,
} from "./ConfirmModal.css";
import { ReactNode } from "react";
import { DefaultModalProps } from "../../ModalContainer";
import { theme } from "@watermelon-clap/core/src/theme";

export interface ConfirmModalProps extends DefaultModalProps {
  title: ReactNode;
  content: ReactNode;
  confirmEvent: () => void;
}

export const ConfirmModal = ({
  isOpen,
  onRequestClose,
  title,
  content,
  confirmEvent,
}: ConfirmModalProps) => {
  useScrollStop(isOpen);

  const handleConfirmClick = () => {
    confirmEvent();
    onRequestClose();
  };

  return (
    <Modal
      shouldCloseOnEsc
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={confirmModalStyles}
      ariaHideApp={false}
    >
      <div css={confirmModalBodyStyles}>
        <h3>{title}</h3>
        <div>{content}</div>
        <div css={[theme.flex.center, theme.gap.gap12]}>
          <Button css={btn} onClick={onRequestClose}>
            취소
          </Button>
          <Button css={btn} onClick={handleConfirmClick}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};
