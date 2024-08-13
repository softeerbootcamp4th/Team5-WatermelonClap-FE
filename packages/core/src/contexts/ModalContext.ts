import { createContext, Dispatch, SetStateAction } from "react";

export interface ModalState {
  type: any;
  props?: any;
}

export const ModalStateContext = createContext<ModalState | null>(null);
export const ModalSetterContext = createContext<Dispatch<
  SetStateAction<ModalState>
> | null>(null);
