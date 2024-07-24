import { createContext, useContext } from "react";

export interface IAssetLoaderState {
  status: "idle" | "loading" | "done";
  loadedCount: number;
  maxCount: number;
  percentage: number;
}

interface IAssetLoaderContext {
  state: IAssetLoaderState;
  onLoadStart: () => void;
  onLoadedData: () => void;
}

export const AssetLoaderContext = createContext<IAssetLoaderContext | null>(
  null,
);

export const useAssetLoader = () => {
  const context = useContext(AssetLoaderContext);

  if (!context) {
    throw new Error(
      "useAssetLoader must be used within an AssetLoaderProvider",
    );
  }

  return context;
};
