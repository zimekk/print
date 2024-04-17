import React, { memo, useCallback, useRef, useState } from "react";
import {
  Grid,
  Center,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { type Mesh } from "three";
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

export default function Section() {
  const [gridConfig] = useState({
    // gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 }.value,
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 }.value,
    cellColor: "#6f6f6f",
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 }.value,
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 }.value,
    sectionColor: "#9d4b4b",
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 }.value,
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 }.value,
    followCamera: false,
    infiniteGrid: true,
  });

  const meshRef = useRef<Mesh>();

  const handleExport = useCallback(() => {
    const exporter = new STLExporter();
    const result = exporter.parse(meshRef.current, { binary: true });
    saveArrayBuffer(result, "box.stl");
  }, []);

  return (
    <section className={styles.Section}>
      <h2>Stl</h2>
      <div>
        <button onClick={handleExport}>export</button>
      </div>
      <div style={{ height: 400 }}>
        <Canvas shadows camera={{ position: [10, 12, 12], fov: 10 }}>
          <group position={[0, -0.5, 0]}>
            <Center top>
              <mesh ref={meshRef} castShadow rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[0.7, 0.7, 0.7]} />
                <meshStandardMaterial color="#9d4b4b" />
              </mesh>
            </Center>
            <Shadows />
            <Grid
              position={[0, -0.01, 0]}
              args={[10.5, 10.5]}
              {...gridConfig}
            />
          </group>
          <OrbitControls makeDefault />
          <Environment preset="city" />
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
              labelColor="white"
            />
          </GizmoHelper>
        </Canvas>
      </div>
    </section>
  );
}
