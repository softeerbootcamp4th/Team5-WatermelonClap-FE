import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalStateContext } from "@service/common/contexts/ModalContext";
import { useModal } from "@service/common/hooks/useModal";
import { GoogleLoginModal, GoogleLoginModalProps } from "./GoolgleLoginModal";

export type ModalType = "login" | "test";

interface ModalComponentMap {
  login: React.FC<GoogleLoginModalProps>;
  test: React.FC<GoogleLoginModalProps>;
}

const MODAL_COMPONENT_MAP: ModalComponentMap = {
  login: GoogleLoginModal,
  test: GoogleLoginModal,
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
