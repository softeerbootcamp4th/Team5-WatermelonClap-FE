import React from "react";
import { useAssetLoader } from "@service/common/contexts/AssetLoaderContext";
import { overlayStyle, loadingBarStyle } from "./Overlay.css";

const FULL_PROGRESS = 100;

const Overlay: React.FC = () => {
  const { state } = useAssetLoader();

  if (state.percentage === FULL_PROGRESS) {
    return null;
  }

  return (
    <div css={overlayStyle}>
      <div css={loadingBarStyle(state.percentage)}></div>
      <p>Loading... {state.percentage}%</p>
    </div>
  );
};

export default Overlay;
