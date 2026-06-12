import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SunriseMaterial = shaderMaterial(
  {
    opacity: 0,
  },

  // Vertex Shader
  `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(position, 1.0);
  }
  `,

  // Fragment Shader
  `
  uniform float opacity;

  varying vec2 vUv;

  void main() {

    // First-minute sunrise colors

    vec3 horizon = vec3(0.78, 0.22, 0.12);
    vec3 orange  = vec3(0.96, 0.48, 0.18);
    vec3 gold    = vec3(0.99, 0.78, 0.42);
    vec3 twilight = vec3(0.10, 0.14, 0.30);
    vec3 night   = vec3(0.02, 0.04, 0.10);

    vec3 color;

    float y = vUv.y;

    // Smooth blends instead of hard edges

    if (y < 0.25) {
      color = mix(
        horizon,
        orange,
        smoothstep(0.0, 0.25, y)
      );
    }
    else if (y < 0.45) {
      color = mix(
        orange,
        gold,
        smoothstep(0.25, 0.45, y)
      );
    }
    else if (y < 0.75) {
      color = mix(
        gold,
        twilight,
        smoothstep(0.45, 0.75, y)
      );
    }
    else {
      color = mix(
        twilight,
        night,
        smoothstep(0.75, 1.0, y)
      );
    }
    float glow =
      1.0 - smoothstep(0.0, 0.35, y);

    color += vec3(0.25, 0.12, 0.05) * glow;
    gl_FragColor = vec4(color, opacity);
  }
  `,
);

extend({ SunriseMaterial });

export default function SunriseSky({ opacity = 0 }) {
  return (
    <mesh position={[0, 10, -450]}>
      <planeGeometry args={[1500, 1100]} />

      <sunriseMaterial transparent opacity={opacity} />
    </mesh>
  );
}
