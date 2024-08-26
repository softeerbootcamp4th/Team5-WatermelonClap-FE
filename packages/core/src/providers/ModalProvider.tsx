import { ReactNode, useState } from "react";
import { ModalSetterContext, ModalStateContext, ModalState } from "../contexts";
interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, setState] = useState<ModalState<unknown, unknown>>({
    type: null,
    props: null,
  });

  return (
    <ModalSetterContext.Provider value={setState}>
      <ModalStateContext.Provider value={state}>
        {children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
};
