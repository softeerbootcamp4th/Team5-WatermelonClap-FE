import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalStateContext } from "@watermelon-clap/core/src/contexts";
import { useModal } from "@watermelon-clap/core/src/hooks";
import {
  GoogleLoginModal,
  PendingModal,
  AlertModal,
  AlertModalProps,
  NavigateModal,
  NavigateModalProps,
} from "./modal";

export type ModalType = "login" | "alert" | "pending" | "navigate";

export interface DefaultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface ModalComponentMap {
  login: React.FC<DefaultModalProps>;
  alert: React.FC<AlertModalProps>;
  pending: React.FC<DefaultModalProps>;
  navigate: React.FC<NavigateModalProps>;
}

const MODAL_COMPONENT_MAP: ModalComponentMap = {
  login: GoogleLoginModal,
  alert: AlertModal,
  pending: PendingModal,
  navigate: NavigateModal,
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
    isOpen: !!modalState.type, // boolean 보장을 위해 !! 사용
    onRequestClose: closeModal,
  };

  return createPortal(
    <ModalComponent {...modalProps} />,
    document.getElementById("modal") as HTMLElement,
  );
};
