import { createContext, Dispatch, SetStateAction } from "react";

export interface ModalState<T, P> {
  type: T;
  props?: P;
}

export const ModalStateContext = createContext<ModalState<
  unknown,
  unknown
> | null>(null);

export const ModalSetterContext = createContext<Dispatch<
  SetStateAction<ModalState<unknown, unknown>>
> | null>(null);
