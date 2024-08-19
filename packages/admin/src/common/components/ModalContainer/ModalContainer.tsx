import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalStateContext } from "@watermelon-clap/core/src/contexts";
import { useModal } from "@watermelon-clap/core/src/hooks";
import {
  AlertModal,
  AlertModalProps,
  ConfirmModal,
  ConfirmModalProps,
  GoogleLoginModal,
  ImageModal,
  ImageModalProps,
} from "./modal";

export type ModalType = "login" | "alert" | "confirm" | "image";

export interface DefaultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface ModalComponentMap {
  login: React.FC<DefaultModalProps>;
  alert: React.FC<AlertModalProps>;
  confirm: React.FC<ConfirmModalProps>;
  image: React.FC<ImageModalProps>;
}

const MODAL_COMPONENT_MAP: ModalComponentMap = {
  login: GoogleLoginModal,
  alert: AlertModal,
  confirm: ConfirmModal,
  image: ImageModal,
};

export const ModalContainer = () => {
  const { closeModal } = useModal();
  const modalState = useContext(ModalStateContext);

  if (!modalState || !modalState.type) {
    return null;
  }

  const { type, props } = modalState;

  const ModalComponent = MODAL_COMPONENT_MAP[type as ModalType];

  if (!ModalComponent) {
    return null;
  }

  const modalProps = {
    ...props,
    isOpen: !!modalState.type,
    onRequestClose: closeModal,
  };

  return createPortal(
    <ModalComponent {...modalProps} />,
    document.getElementById("modal") as HTMLElement,
  );
};
