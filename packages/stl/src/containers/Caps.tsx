import React, { useMemo } from "react";
import { Lathe } from "@react-three/drei";
import { Vector2 } from "three";

export const Caps = function ({ wireframe, meshRef }) {
  const segments = 36 * 2;
  const points = useMemo(() => {
    const r1 = 15 / 2;
    const r2 = 13.5 / 2;
    let n = 0;
    return [
      new Vector2(0, n),
      new Vector2(r1 - 0.2, n),
      new Vector2(r1, ++n - 0.8),
      new Vector2(r1, ++n),
      new Vector2(r2 - 0.1, n),
      new Vector2(r2, ++n),
      new Vector2(r2 - 1, ++n),
      new Vector2(r2, ++n),
      new Vector2(r2 - 1, ++n),
      new Vector2(r2, ++n),
      new Vector2(r2 - 1, ++n),
      new Vector2(r2, ++n),
      new Vector2(r2 - 1, ++n),
      new Vector2(0, n),
    ];
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
