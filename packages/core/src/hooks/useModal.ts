import { useContext } from "react";
import { ModalSetterContext, ModalState } from "../contexts/ModalContext";

export const useModal = <T = unknown, P = unknown>() => {
  const setModalState = useContext(ModalSetterContext);

  if (!setModalState) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  const openModal = (modalState: ModalState<T, P>) => {
    setModalState(modalState);
  };

  const closeModal = () => {
    setModalState({ type: null, props: null } as ModalState<T, P>);
  };

  return { openModal, closeModal };
};
