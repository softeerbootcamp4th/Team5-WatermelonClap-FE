import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils, Mesh } from "three";

interface BoxProps {
  deg: number;
}
const Box = ({ deg }: BoxProps) => {
  const ref = useRef<Mesh | null>(null);

  //[4.675, 1.825, 1.415]
  return (
    <mesh
      ref={ref}
      position={[0, -0.07, 0]}
      rotation={[0, MathUtils.degToRad(deg), 0]}
    >
      <boxGeometry args={[4.675, 1.525, 2.015]} />
      <meshBasicMaterial color={"orange"} wireframe />
    </mesh>
  );
};

export const RotateDemoPage = () => {
  const [deg, setDeg] = useState(0);

  const degPerTick = 6;

  const rotateRight = () => {
    setDeg((deg) => (deg + degPerTick) % 360);
  };

  const rotateLeft = () => {
    setDeg((deg) => (deg - degPerTick + 360) % 360);
  };
  const getImgSrc = (deg: number) => {
    const idx = (Math.floor((deg + 54) / 6) % 60) + 1;
    return `/images/0${idx.toString().padStart(2, "0")}.png`;
  };

  const curImgSrc = getImgSrc(deg);

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 24px;
        padding: 48px;
      `}
    >
      <div
        css={css`
          flex: 1;
          border: 1px solid black;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src={curImgSrc}
          css={css`
            margin-left: 20px;
            width: 100%;
          `}
        />
        <div
          css={css`
            position: absolute;
            width: 100%;
            aspect-ratio: 8.17 / 2.7;
          `}
        >
          <Canvas
            orthographic
            camera={{
              zoom: 235,
            }}
          >
            <Box deg={deg} />
          </Canvas>
        </div>
        <div
          css={css`
            position: absolute;
            height: 100%;
            width: 2px;
            background-color: black;
          `}
        />
        <div
          css={css`
            transform: rotate3d(0, 1, 0, ${deg}deg);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          `}
        >
          <h1>hi</h1>
        </div>
      </div>
      <div>
        <span>{deg}°</span>
        <div>
          <button onClick={rotateLeft}>Left</button>
          <button onClick={rotateRight}>Right</button>
        </div>
      </div>
    </div>
  );
};
