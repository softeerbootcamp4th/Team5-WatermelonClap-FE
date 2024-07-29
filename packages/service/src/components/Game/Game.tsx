import { css } from "@emotion/react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";
export const Game = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        height: 1500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
      `}
    >
      {init && (
        <Particles
          css={css`
            height: 100%;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
          `}
          options={{
            fullScreen: {
              enable: false,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                resize: {
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#2E3192", "#2554C7", "#3D008A", "#5A0077", "#7A001F"],
              },

              move: {
                direction: "bottom",
                enable: true,

                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "square",
              },
              size: {
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};
