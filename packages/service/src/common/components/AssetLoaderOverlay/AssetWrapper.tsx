import React, { useEffect, useRef } from "react";
import { useAssetLoader } from "@service/common/contexts/AssetLoaderContext";

interface AssetWrapperProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * 이 컴포넌트는 AssetLoaderContext 내에서만 사용해야 함
 */

const AssetWrapper: React.FC<AssetWrapperProps> = ({ src, alt, className }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isFirstRender = useRef(true);
  const { onLoadStart, onLoadedData } = useAssetLoader();

  useEffect(() => {
    if (isFirstRender.current) {
      onLoadStart();
      isFirstRender.current = false;
    }
  }, [onLoadStart]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={onLoadedData}
      className={className}
    />
  );
};

export default AssetWrapper;
