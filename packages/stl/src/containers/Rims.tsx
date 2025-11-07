import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import {
  Geometry,
  Base,
  Subtraction,
  Addition,
  CSGGeometryRef,
} from "@react-three/csg";

export type Point = [number, number];

const createShape = (edges: Point[]) =>
  edges
    .reduce(
      (shape, [x, y], k) => shape[k > 0 ? "lineTo" : "moveTo"](x, y),
      new THREE.Shape(),
    )
    .closePath();

export const Rims = function ({ wireframe, meshRef }) {
  const csg = useRef<CSGGeometryRef>(null);

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
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  const hole = useMemo(() => {
    const d = 6,
      slit = 1.5 - 0.2;
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
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  const peg = useMemo(() => {
    const d = 6,
      slit = 1.5;
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
      { depth: 1, bevelEnabled: false },
    );
  }, []);

  const rim = useMemo(() => {
    const points: Point[] = [
      [0, 0],
      [10 + 2 + 1, 0],
      [15 + 2 + 1, 15 + 1],
      [15 + 2 + 1, 15 + 1 + 1],
      [15 + 2 + 1 - 3, 15 + 1 + 1],
      [15 + 2 + 1 - 3, 15 + 1 + 0.5],
      [15 + 2, 15 + 1],
      [10 + 2, 1],
      [2, 1],
      [2, 20],
      [0, 20],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const dot = useMemo(() => {
    const d = 4,
      slit = 0.1;
    const points: Point[] = [
      [d / 2 + slit, 1],
      [d / 2 + slit, -10],
      [0, -10 - 2],
      [-(d / 2 + slit), -10],
      [-(d / 2 + slit), 1],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  return (
    <mesh ref={meshRef} receiveShadow castShadow>
      <Geometry ref={csg} computeVertexNormals>
        <Base name="base" geometry={shape} scale={[1, 1, 80]} />
        <Addition
          name="peg"
          geometry={peg}
          position={[0, 0, 80]}
          scale={[1, 1, 38]}
        />
        <Addition
          name="rim"
          geometry={rim}
          position={[-10, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 20]}
        />
        <Subtraction
          name="dot"
          geometry={dot}
          position={[0, 15 + 1, -20]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 10]}
        />
        <Base
          name="base"
          geometry={shape}
          position={[50, 0, 0]}
          scale={[1, 1, 78]}
        />
        <Subtraction
          name="hole"
          geometry={hole}
          position={[50, 0, 38]}
          scale={[1, 1, 40]}
        />
        <Addition
          name="rim"
          geometry={rim}
          position={[-10 + 50, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 20]}
        />
        <Subtraction
          name="dot"
          geometry={dot}
          position={[50, 15 + 1, -20]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 10]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </mesh>
  );
};

export const Rim2 = function ({ wireframe, meshRef }) {
  const csg = useRef<CSGGeometryRef>(null);

  const bar = useMemo(() => {
    const w = 6,
      h = 20,
      r = 4;
    const points: Point[] = [
      [w, 0],
      [w, h],
      [-w, h],
      [-w, h - r],
      [-w, r],
      [-w, 0],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const bar2 = useMemo(() => {
    const w = 6,
      h = 20,
      r = 4,
      d = 2;
    const points: Point[] = [
      [w, 0],
      [w, h],
      [-w, h],
      [-w, h - r],
      [-(w - d), h - r],
      [-(w - d), h - d],
      [w - d, h - d],
      [w - d, d],
      [-(w - d), d],
      [-(w - d), r],
      [-w, r],
      [-w, 0],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const bar3 = useMemo(() => {
    const w = 6,
      h = 20,
      d = 2 + 0.4;
    const points: Point[] = [
      [-(w - d), h - d],
      [w - d, h - d],
      [w - d, d],
      [-(w - d), d],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const clip1 = useMemo(() => {
    const w = 6,
      h = 20,
      l = 10,
      r = 4,
      s = 1.5,
      m = 1;
    const points: Point[] = [
      [w + m, l],
      [w + s, l],
      [w + s, h + s],
      [-(w + s), h + s],
      [-(w + s), h - s - r],
      [-(w - m), h - s - r + 0.8],
      [-(w - m), h - m - r + 1],
      [-(w + m), h - m - r + 1.8],
      [-(w + m), h + m],
      [w + m, h + m],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const clip2 = useMemo(() => {
    const w = 6,
      h = 20,
      l = 10,
      s = 1.5,
      m = 1;
    const points: Point[] = [
      [w + m, l],
      [w + s, l],
      [w + s, h + s],
      [-(w + s), h + s],
      [-(w + m), h + m],
      [w + m, h + m],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const clip3 = useMemo(() => {
    const w = 6,
      h = 20,
      l = 10,
      s = 1.5,
      m = 1;
    const points: Point[] = [
      [w + m, l],
      [w + s, l],
      [w + s, h + s],
      [-(w + s), h + s],
      [-(w + s), l],
      [-(w + m), l],
      [-(w + m), h + m],
      [w + m, h + m],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const rim = useMemo(() => {
    const points: Point[] = [
      [0, 0],
      [10 + 2 + 1, 0],
      [15 + 2 + 1, 15 + 1],
      [15 + 2 + 1, 15 + 1 + 1],
      [15 + 2 + 1 - 3, 15 + 1 + 1],
      [15 + 2 + 1 - 3, 15 + 1 + 0.5],
      [15 + 2, 15 + 1],
      [10 + 2, 1],
      [2, 1],
      [2, 20],
      [0, 20],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  const rim2 = useMemo(() => {
    const points: Point[] = [
      [0, 0],
      [10 + 2 + 1, 0],
      [10 + 2, 1],
      [2, 1],
      [2, 20],
      [0, 20],
    ];
    return new THREE.ExtrudeGeometry(createShape(points), {
      depth: 1,
      bevelEnabled: false,
    });
  }, []);

  return (
    <mesh ref={meshRef} receiveShadow castShadow>
      <Geometry ref={csg} computeVertexNormals>
        <Base geometry={bar} position={[0, 0, 0]} scale={[1, 1, 60]} />
        <Addition geometry={bar2} position={[0, 0, 60]} scale={[1, 1, 38]} />
        <Addition
          geometry={rim}
          position={[-10, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 6]}
        />
        <Addition
          geometry={rim2}
          position={[-4, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 8]}
        />
        <Addition
          geometry={rim}
          position={[4, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 6]}
        />
        <Base geometry={bar} position={[50, 0, 0]} scale={[1, 1, 60]} />
        <Addition geometry={bar3} position={[50, 0, 60]} scale={[1, 1, 38]} />
        <Addition
          geometry={rim}
          position={[50 - 10, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 6]}
        />
        <Addition
          geometry={rim2}
          position={[50 - 4, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 8]}
        />
        <Addition
          geometry={rim}
          position={[50 + 4, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 6]}
        />
        <Addition geometry={clip3} position={[-50, 0, 20]} scale={[1, 1, 40]} />
        <Addition geometry={clip2} position={[-50, 0, 60]} scale={[1, 1, 10]} />
        <Addition geometry={clip1} position={[-50, 0, 70]} scale={[1, 1, 5]} />
        <Addition geometry={clip2} position={[-50, 0, 75]} scale={[1, 1, 10]} />
        <Addition geometry={clip1} position={[-50, 0, 85]} scale={[1, 1, 5]} />
        <Addition geometry={clip2} position={[-50, 0, 90]} scale={[1, 1, 10]} />
        <Addition
          geometry={clip3}
          position={[-50, 0, 100]}
          scale={[1, 1, 40]}
        />
      </Geometry>
      {wireframe ? (
        <meshBasicMaterial color="#2f7f4f" wireframe />
      ) : (
        <meshStandardMaterial color="#9d4b4b" />
      )}
    </mesh>
  );
};
