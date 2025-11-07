import React, { useMemo } from "react";
import { Extrude } from "@react-three/drei";
import { MathUtils, Shape, CatmullRomCurve3, Vector3 } from "three";

const positions = new Float32Array([10, 0, 0, 2, 5, 0, -1, 2, 0, 1, -1, 0]);

const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);

const colors = new Float32Array([
  0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
]);

const indices = new Uint16Array([0, 1, 3, 2, 3, 1]);

const Comp = () => (
  <mesh>
    <bufferGeometry>
      <bufferAttribute
        attach="attributes-position"
        array={positions}
        count={positions.length / 3}
        itemSize={3}
      />
      <bufferAttribute
        attach="attributes-color"
        array={colors}
        count={colors.length / 3}
        itemSize={3}
      />
      <bufferAttribute
        attach="attributes-normal"
        array={normals}
        count={normals.length / 3}
        itemSize={3}
      />
      <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
      />
    </bufferGeometry>
    <meshBasicMaterial color="#2f7f4f" wireframe />
    {/* <meshStandardMaterial
          vertexColors
          side={DoubleSide}
      /> */}
  </mesh>
);

// https://discourse.threejs.org/t/how-to-use-extrudegeometry-with-functional-components/30446
function Extrusion({ start = [0, 0], paths, ...props }) {
  const shape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(...(start as [number, number]));
    // paths.forEach((path) => shape.bezierCurveTo(...path))
    paths.forEach((path: [number, number]) => shape.lineTo(...path));
    return shape;
  }, [start, paths]);

  return (
    <mesh>
      <extrudeGeometry args={[shape, props]} />
      <meshBasicMaterial color="#2f7f4f" wireframe />
    </mesh>
  );
}

// https://stackoverflow.com/questions/51874333/three-js-generate-shape-with-arcs
function Screw() {
  const shape = useMemo(() => {
    const shape = new Shape();
    shape.absarc(0, -4, 5, MathUtils.degToRad(60), MathUtils.degToRad(120));
    shape.absarc(0, 4, 5, MathUtils.degToRad(240), MathUtils.degToRad(300));
    return shape;
  }, []);

  return (
    <mesh>
      <extrudeGeometry
        args={[
          shape,
          {
            // bevelSegments:5,
            depth: 10,
            // extrudePath={closedSpline}
            steps: 10,
          },
        ]}
      />
      <meshBasicMaterial color="#2f7f4f" wireframe />
    </mesh>
  );
}

export const Shapes = function ({ wireframe, meshRef }) {
  // const meshRef = useRef<Mesh>();
  // const svgRef = useRef<SVGSVGElement>();

  const shape = useMemo(() => {
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html
    const shape = new Shape().moveTo(-20, 0).lineTo(0, 30).lineTo(40, 0);
    return shape;
  }, []);

  const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };

  // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_extrude_shapes.html
  const closedSpline = new CatmullRomCurve3([
    new Vector3(-60, -100, 60),
    new Vector3(-60, 20, 60),
    new Vector3(-60, 120, 60),
    new Vector3(60, 20, -60),
    new Vector3(60, -100, -60),
  ]);

  closedSpline.curveType = "catmullrom";
  // closedSpline.closed = true;

  return (
    <>
      <Extrusion
        bevelSegments={5}
        depth={10}
        extrudePath={closedSpline}
        paths={[
          // [-20, 25, 0, 0, 10,10],
          [2, 2.5, 2.0, 0, 0, -1],
          [4.0, 0, 3.0, 3.5, 5.0, 3.5],
          [3.0, 5.5, 1.0, 1.7, 1.5, 6.5],
        ]}
        steps={10}
      />
      <Screw />
      <Comp />
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
