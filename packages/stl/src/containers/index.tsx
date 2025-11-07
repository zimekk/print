import React, { useCallback, useRef, useState } from "react";
import {
  // Center,
  // Edges,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  // DoubleSide,
  type Mesh,
  CatmullRomCurve3,
  Vector3,
} from "three";
import { STLExporter } from "three/examples/jsm/exporters/STLExporter";
import { Caps } from "./Caps";
import { Clip, Clip2, Clip3 } from "./Clip";
import { Lathes } from "./Lathes";
import { Shapes } from "./Shapes";
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

  const meshRef = useRef<Mesh>(null);
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
