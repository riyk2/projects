import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0f172a" },
        particles: {
          number: { value: 80 },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          links: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "connect", // Cursor now forms lines with particles
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 140,
              radius: 200,
              links: {
                opacity: 0.6,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBackground;