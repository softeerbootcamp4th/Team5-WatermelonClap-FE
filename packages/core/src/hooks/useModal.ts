import { useContext } from "react";
import { ModalSetterContext, ModalState } from "../contexts/ModalContext";

export const useModal = () => {
  const setModalState = useContext(ModalSetterContext);

  if (!setModalState) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  const openModal = ({ type, props = null }: ModalState) => {
    setModalState({ type, props });
  };

  const closeModal = () => {
    setModalState({ type: null, props: null });
  };

  return { openModal, closeModal };
};
