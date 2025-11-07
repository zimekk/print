import React, { useMemo } from "react";
import { Lathe } from "@react-three/drei";
import { Vector2 } from "three";

// https://codesandbox.io/p/sandbox/three-js-lathe-capsulegeometry-9iey6z?file=%2Fsrc%2FCapsuleGeometry.js%3A11%2C39
export const Lathes = function ({ wireframe, meshRef }) {
  const segments = 5;
  const points = useMemo(() => {
    // https://threejs.org/docs/#api/en/geometries/LatheGeometry
    const points = [];
    for (let i = 0; i < 10; i++) {
      points.push(new Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
    }
    return points;
  }, []);

  return (
    <Lathe ref={meshRef} args={[points, segments]}>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </Lathe>
  );
};
