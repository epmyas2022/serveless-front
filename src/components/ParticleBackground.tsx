import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    async function initializeEngine() {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
        setInit(true);
      });
    }
    initializeEngine();
  }, []);

  //TODO: Move to a separate file
  const options: ISourceOptions = useMemo(() => {
    return {
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ["#ffffff", "#6366f1", "#8b5cf6", "#3b82f6"],
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "top",
          random: true,
          straight: false,
          outModes: {
            default: "out",
            top: "out",
            bottom: "out",
          },
          attract: {
            enable: false,
          },
        },
      },
      detectRetina: true,
    };
  }, []);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }
  return <template></template>;
}
