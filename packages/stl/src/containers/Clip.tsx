import React, { useMemo } from "react";
import { Extrude } from "@react-three/drei";
import { Shape } from "three";

export const Clip = function ({ wireframe, meshRef }) {
  const shape = useMemo(() => {
    const w = 53;
    const h = 41;
    const d = 1;
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html
    const shape = new Shape()
      .moveTo(0, 0)
      .lineTo(w / 2, 0)
      .lineTo(w / 2, -h)
      .lineTo(w / 2 - 4, -h)
      .lineTo(w / 2 - 4, -h - d)
      .lineTo(w / 2 + d, -h - d)
      .lineTo(w / 2 + d, d)
      .lineTo(d + 1, d)
      .lineTo(d + 1, d + 14)
      .lineTo(0 + 0.5, d + 12)
      .lineTo(0 + 0.5, d + 10)
      .lineTo(d + 0.5, d + 9)
      .lineTo(0 + 0.5, d + 8)
      .lineTo(d + 0.5, d + 7)
      .lineTo(0 + 0.5, d + 6)
      .lineTo(d + 0.5, d + 5)
      .lineTo(0 + 0.5, d + 4)
      .lineTo(d + 0.5, d + 3)
      .lineTo(0 + 0.5, d + 2)
      .lineTo(d + 0.5, d + 1)
      .lineTo(0 - 0, d + 0)
      .lineTo(-d - 0.5, d + 1)
      .lineTo(-0 - 0.5, d + 2)
      .lineTo(-d - 0.5, d + 3)
      .lineTo(-0 - 0.5, d + 4)
      .lineTo(-d - 0.5, d + 5)
      .lineTo(-0 - 0.5, d + 6)
      .lineTo(-d - 0.5, d + 7)
      .lineTo(-0 - 0.5, d + 8)
      .lineTo(-d - 0.5, d + 9)
      .lineTo(-0 - 0.5, d + 10)
      .lineTo(-0 - 0.5, d + 12)
      .lineTo(-d - 1, d + 14)
      .lineTo(-(d + 1), d)
      .lineTo(-(w / 2 + d), d)
      .lineTo(-(w / 2 + d), -h - d)
      .lineTo(-(w / 2 - 4), -h - d)
      .lineTo(-(w / 2 - 4), -h)
      .lineTo(-(w / 2), -h)
      .lineTo(-(w / 2), 0);
    return shape;
  }, []);

  const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };

  return (
    <>
      <Extrude ref={meshRef} args={[shape, extrudeSettings]} castShadow>
        {wireframe ? (
          <meshBasicMaterial color="#2f7f4f" wireframe />
        ) : (
          <meshStandardMaterial color="#9d4b4b" />
        )}
      </Extrude>
    </>
  );
};

export const Clip2 = function ({ wireframe, meshRef }) {
  const shape = useMemo(() => {
    const w = 51;
    const h = 41;
    const d = 1.5;
    const s = -4;
    const z = 0.8;
    const m = 1.5;
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html
    const shape = new Shape()
      .moveTo(0, 0)
      .lineTo(w / 2, 0)
      .lineTo(w / 2, -h)
      .lineTo(w / 2 - 8, -h + m)
      .lineTo(w / 2 - 8, -h - d + m)
      .lineTo(w / 2 + d, -h - d)
      .lineTo(w / 2 + d, d)
      .lineTo(s + 18, d)
      .lineTo(s + 16, d + z)
      .lineTo(s + 15, d)
      .lineTo(s + 14, d + z)
      .lineTo(s + 13, d)
      .lineTo(s + 12, d + z)
      .lineTo(s + 11, d)
      .lineTo(s + 10, d + z)
      .lineTo(s + 9, d)
      .lineTo(s + 8, d + z)
      .lineTo(s + 7, d)
      .lineTo(s + 6, d + z)
      .lineTo(s + 5, d)
      .lineTo(s + 4, d + z)
      .lineTo(s + 3, d)
      .lineTo(s + 2, d)
      .lineTo(s + 1, d + z)
      .lineTo(s + 1, d + 2 - z)
      .lineTo(s + 2, d + 2)
      .lineTo(s + 3, d + 2 - z)
      .lineTo(s + 4, d + 2)
      .lineTo(s + 5, d + 2 - z)
      .lineTo(s + 6, d + 2)
      .lineTo(s + 7, d + 2 - z)
      .lineTo(s + 8, d + 2)
      .lineTo(s + 9, d + 2 - z)
      .lineTo(s + 10, d + 2)
      .lineTo(s + 11, d + 2 - z)
      .lineTo(s + 12, d + 2)
      .lineTo(s + 13, d + 2 - z)
      .lineTo(s + 14, d + 2)
      .lineTo(s + 15, d + 2 - z)
      .lineTo(s + 16, d + 2)
      .lineTo(s + 18, d + 2)
      .lineTo(s + 18, d + 3)
      .lineTo(s, d + 2 + d)
      .lineTo(s - 2 * d, d)
      .lineTo(-(w / 2 + d), d)
      .lineTo(-(w / 2 + d), -h - d)
      .lineTo(-(w / 2 - 8), -h - d + m)
      .lineTo(-(w / 2 - 8), -h + m)
      .lineTo(-(w / 2), -h)
      .lineTo(-(w / 2), 0);
    return shape;
  }, []);

  const extrudeSettings = { steps: 4, depth: 8, bevelEnabled: false };

  return (
    <>
      <Extrude ref={meshRef} args={[shape, extrudeSettings]} castShadow>
        {wireframe ? (
          <meshBasicMaterial color="#2f7f4f" wireframe />
        ) : (
          <meshStandardMaterial color="#9d4b4b" />
        )}
      </Extrude>
    </>
  );
};

export const Clip3 = function ({ wireframe, meshRef }) {
  const shape = useMemo(() => {
    const w = 32;
    const h = 70;
    const a = 3;
    const b = 3;
    const c = 2;
    const d = 32;
    const e = 2;
    const f = 8;
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html
    const shape = new Shape()
      .moveTo(0, 0)
      .lineTo(w, 0)
      .lineTo(w, a)

      .lineTo(-b - 55, a)
      .lineTo(-b - 55, -8)
      .lineTo(-b, -8)

      .lineTo(-b, a)
      .lineTo(-b, -h - c)
      .lineTo(d + e, -h - c)
      .lineTo(d + e, -h + f)
      .lineTo(d, -h + f)
      .lineTo(d, -h)
      .lineTo(0, -h)
      .lineTo(0, 0);
    return shape;
  }, []);

  const extrudeSettings = {
    steps: 4,
    depth: 32,
    bevelEnabled: true,
    bevelThickness: 0.1,
  };

  return (
    <>
      <Extrude ref={meshRef} args={[shape, extrudeSettings]} castShadow>
        {wireframe ? (
          <meshBasicMaterial color="#2f7f4f" wireframe />
        ) : (
          <meshStandardMaterial color="#9d4b4b" />
        )}
      </Extrude>
    </>
  );
};
