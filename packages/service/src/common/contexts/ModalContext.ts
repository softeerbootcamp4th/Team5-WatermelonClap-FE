import { createContext, Dispatch, SetStateAction } from "react";
import { ModalType } from "../components/ModalContainer/ModalContainer";

export interface ModalState {
  type: ModalType | null;
  props?: any; // todo change any
}

export const ModalStateContext = createContext<ModalState | null>(null);
export const ModalSetterContext = createContext<Dispatch<
  SetStateAction<ModalState>
> | null>(null);
