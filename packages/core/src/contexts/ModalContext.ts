import { createContext, Dispatch, SetStateAction } from "react";

export interface ModalState {
  type: string | null;
  props?: Record<string, unknown> | null;
}

export const ModalStateContext = createContext<ModalState | null>(null);
export const ModalSetterContext = createContext<Dispatch<
  SetStateAction<ModalState>
> | null>(null);
