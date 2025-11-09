import * as THREE from "three";
import React, { useEffect, useMemo } from "react";

export type Point = [number, number];

const createShape = (edges: Point[]) =>
  edges
    .reduce(
      (shape, [x, y], k) => shape[k > 0 ? "lineTo" : "moveTo"](x, y),
      new THREE.Shape(),
    )
    .closePath();

export const Twist = function ({ wireframe, meshRef }) {
  const shape = useMemo(() => {
    const d = 6,
      slit = 0;
    const points: Point[] = [
      [5 - slit, 0 + slit],
      [5 - slit, d - slit],
      [d / 2 - slit, 10 - slit],
      [d / 2 - slit, 20 - slit],
    ];
    return new THREE.ExtrudeGeometry(
      createShape(
        points.concat([...points].reverse().map(([x, y]) => [-x, y])),
      ),
      { bevelEnabled: false, depth: 50, steps: 20 },
    );
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      const vertices = mesh.geometry.attributes.position.array;

      // https://stackoverflow.com/questions/39588472/three-js-extrude-2d-face-whilst-rotating-about-extrusion-axis
      for (let i = 0; i <= vertices.length; i += 3) {
        const x = vertices[i],
          y = vertices[i + 1],
          z = vertices[i + 2];
        const angle = (z * Math.PI) / 100;
        var updateX = x * Math.cos(angle) - y * Math.sin(angle);
        var updateY = y * Math.cos(angle) + x * Math.sin(angle);

        vertices[i] = updateX;
        vertices[i + 1] = updateY;
      }
      mesh.geometry.attributes.position.needsUpdate = true;
      mesh.geometry.computeVertexNormals();
    }
  }, [meshRef]);

  return (
    <mesh ref={meshRef} receiveShadow castShadow geometry={shape}>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </mesh>
  );
};
