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
  ConfirmModal,
  ConfirmModalProps,
  DescriptionModal,
  DescriptionModalProps,
} from "./modal";

// ModalType 정의
export type ModalType =
  | "login"
  | "alert"
  | "pending"
  | "navigate"
  | "confirm"
  | "description";

// DefaultModalProps 정의
export interface DefaultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// ModalComponentMap 인터페이스 정의
interface ModalComponentMap {
  login: React.FC<DefaultModalProps>;
  alert: React.FC<AlertModalProps>;
  pending: React.FC<DefaultModalProps>;
  navigate: React.FC<NavigateModalProps>;
  confirm: React.FC<ConfirmModalProps>;
  description: React.FC<DescriptionModalProps>;
}

// MODAL_COMPONENT_MAP 구현
const MODAL_COMPONENT_MAP: ModalComponentMap = {
  login: GoogleLoginModal,
  alert: AlertModal,
  pending: PendingModal,
  navigate: NavigateModal,
  confirm: ConfirmModal,
  description: DescriptionModal,
};

// ModalStateMap 정의
export interface ModalStateMap {
  login: DefaultModalProps;
  alert: AlertModalProps;
  pending: DefaultModalProps;
  navigate: NavigateModalProps;
  confirm: ConfirmModalProps;
  description: DescriptionModalProps;
}

// ModalState 제네릭 타입 정의
export interface ModalState<T extends ModalType> {
  type: T;
  props?: ModalStateMap[T];
}

// ModalContainer 컴포넌트 정의
export const ModalContainer = () => {
  const { closeModal } = useModal();
  const modalState = useContext(
    ModalStateContext,
  ) as ModalState<ModalType> | null;

  if (!modalState || !modalState.type) {
    return null;
  }

  // modalState의 type과 props를 구체적으로 타입 캐스팅
  const { type, props } = modalState;

  // ModalComponent를 동적으로 선택
  const ModalComponent = MODAL_COMPONENT_MAP[type] as React.FC<
    ModalStateMap[typeof type]
  >;

  if (!ModalComponent) {
    return null;
  }

  // modalProps 정의
  const modalProps = {
    ...props,
    isOpen: Boolean(modalState.type),
    onRequestClose: closeModal,
  } as ModalStateMap[typeof type]; // modalProps 타입 지정

  return createPortal(
    <ModalComponent {...modalProps} />,
    document.getElementById("modal") as HTMLElement,
  );
};
