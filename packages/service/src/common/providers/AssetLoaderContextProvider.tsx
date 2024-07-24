import React, { useCallback, useReducer, ReactNode } from "react";
import {
  IAssetLoaderState,
  AssetLoaderContext,
} from "../contexts/AssetLoaderContext";

interface AssetLoaderContextProviderProps {
  children: ReactNode;
}

type AssetLoaderAction = { type: "LOAD_START" } | { type: "LOAD_DONE" };

const assetLoaderReducer = (
  state: IAssetLoaderState,
  action: AssetLoaderAction,
): IAssetLoaderState => {
  switch (action.type) {
    case "LOAD_START":
      return {
        ...state,
        status: "loading",
        percentage: 0,
        maxCount: state.maxCount + 1,
      };
    case "LOAD_DONE":
      return {
        ...state,
        percentage: ((state.loadedCount + 1) / state.maxCount) * 100,
        loadedCount: state.loadedCount + 1,
      };
  }
};

const initialState: IAssetLoaderState = {
  status: "idle",
  loadedCount: 0,
  maxCount: 0,
  percentage: 0,
};

export const AssetLoaderContextProvider: React.FC<
  AssetLoaderContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(assetLoaderReducer, initialState);

  const onLoadStart = useCallback(() => {
    dispatch({ type: "LOAD_START" });
  }, []);

  const onLoadedData = useCallback(() => {
    dispatch({ type: "LOAD_DONE" });
  }, []);

  return (
    <AssetLoaderContext.Provider
      value={{
        state,
        onLoadStart,
        onLoadedData,
      }}
    >
      {children}
    </AssetLoaderContext.Provider>
  );
};
