import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import {
  AccumulativeShadows,
  // Center,
  // Edges,
  Environment,
  Extrude,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  RandomizedLight,
  Lathe,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  // DoubleSide,
  MathUtils,
  type Mesh,
  Shape,
  CatmullRomCurve3,
  Vector2,
  Vector3,
} from "three";
import { STLExporter } from "three/examples/jsm/exporters/STLExporter";
import styles from "./styles.module.scss";

// https://threejs.org/examples/#misc_exporter_stl
function save(blob: Blob, filename: string) {
  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  document.body.removeChild(link);
}

function saveArrayBuffer(buffer: BlobPart, filename: string) {
  save(new Blob([buffer], { type: "application/octet-stream" }), filename);
}

// https://codesandbox.io/p/sandbox/grid-component-19uq2u
const Shadows = memo(() => (
  <AccumulativeShadows
    temporal
    frames={100}
    color="#9d4b4b"
    colorBlend={0.5}
    alphaTest={0.9}
    scale={20}
  >
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
));

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
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html
    const shape = new Shape()
      .moveTo(0, 0)
      .lineTo(w / 2, 0)
      .lineTo(w / 2, -h)
      .lineTo(w / 2 - 8, -h)
      .lineTo(w / 2 - 8, -h - d)
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
      .lineTo(s + 18, d + 2 + d)
      .lineTo(s, d + 2 + d)
      .lineTo(s - 2 * d, d)
      .lineTo(-(w / 2 + d), d)
      .lineTo(-(w / 2 + d), -h - d)
      .lineTo(-(w / 2 - 8), -h - d)
      .lineTo(-(w / 2 - 8), -h)
      .lineTo(-(w / 2), -h)
      .lineTo(-(w / 2), 0);
    return shape;
  }, []);

  const extrudeSettings = { steps: 1, depth: 12, bevelEnabled: false };

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
    const w = 35;
    const h = 70;
    const a = 2;
    const b = 2;
    const c = 2;
    const d = 32;
    const e = 2;
    const f = 5;
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html
    const shape = new Shape()
      .moveTo(0, 0)
      .lineTo(w, 0)
      .lineTo(w, a)

      .lineTo(-b - 55, a)
      .lineTo(-b - 55, -10)
      .lineTo(-b, -10)

      .lineTo(-b, a)
      .lineTo(-b, -h - c)
      .lineTo(-b + d + e, -h - c)
      .lineTo(-b + d + e, -h + f)
      .lineTo(-b + d, -h + f)
      .lineTo(-b + d, -h)
      .lineTo(0, -h)
      .lineTo(0, 0);
    return shape;
  }, []);

  const extrudeSettings = {
    steps: 4,
    depth: 2,
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

const PAGES = {
  clip3: Clip3,
  clip2: Clip2,
  clip: Clip,
  caps: Caps,
  lathe: Lathes,
  shape: Shapes,
};

export default function Section() {
  const [page, setPage] = useState(() => Object.keys(PAGES)[0]);
  const [preview, setPreview] = useState(null);
  const [wireframe, setWireframe] = useState(true);
  const [showCanvas] = useState(true);
  const [gridConfig] = useState({
    // gridSize: [10.5, 10.5],
    cellSize: { value: 10, min: 0, max: 10, step: 0.1 }.value,
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 }.value,
    cellColor: "#6f6f6f",
    sectionSize: { value: 100, min: 0, max: 10, step: 0.1 }.value,
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 }.value,
    sectionColor: "#9d4b4b",
    fadeDistance: { value: 250, min: 0, max: 100, step: 1 }.value,
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 }.value,
    followCamera: false,
    infiniteGrid: true,
  });

  const Page = PAGES[page];

  const meshRef = useRef<Mesh>();
  // const svgRef = useRef<SVGSVGElement>();

  const handleExport = useCallback(() => {
    const exporter = new STLExporter();
    const result = exporter.parse(meshRef.current, { binary: true });
    saveArrayBuffer(result, "shape.stl");
  }, []);

  const handleToggle = useCallback(
    ({ target }) => setWireframe(target.checked),
    [],
  );

  const handleFileChange = useCallback(({ target }) => {
    // https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
    const objectUrl = URL.createObjectURL(target.files[0]);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, []);

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
    <section className={styles.Section}>
      <h2>Stl</h2>
      <nav>
        {Object.keys(PAGES).map((page, index) => (
          <span key={index}>
            {index > 0 && ` | `}
            <a
              key={page}
              href={`#${page}`}
              onClick={(e) => (e.preventDefault(), setPage(page))}
            >
              {page}
            </a>
          </span>
        ))}
      </nav>
      <div>
        <button onClick={handleExport}>export</button>
        <input type="file" onChange={handleFileChange} />
        {preview && <button onClick={() => setPreview(null)}>x</button>}
        <label>
          <input type="checkbox" onChange={handleToggle} checked={wireframe} />
          <span>wireframe</span>
        </label>
      </div>
      <div style={{ height: 400, position: "relative" }}>
        {preview && (
          <div style={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={preview}
            />
          </div>
        )}
        {showCanvas && (
          <Canvas
            shadows
            camera={{
              position: [100, 100, 100],
              fov: 20,
            }}
          >
            <Page wireframe={wireframe} meshRef={meshRef} />
            <Grid
              position={[0, -0.01, 0]}
              args={[10.5, 10.5]}
              {...gridConfig}
            />
            <OrbitControls makeDefault />
            {!wireframe && <Environment preset="city" />}
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport
                axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
                labelColor="white"
              />
            </GizmoHelper>
          </Canvas>
        )}
      </div>
    </section>
  );
}
