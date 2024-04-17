import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, type MeshProps, useFrame } from "@react-three/fiber";
import { type Mesh } from "three";
import { STLExporter } from "three/examples/jsm/exporters/STLExporter";
import styles from "./styles.module.scss";

function save(blob, filename) {
  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  document.body.removeChild(link);
}

function saveArrayBuffer(buffer, filename) {
  save(new Blob([buffer], { type: "application/octet-stream" }), filename);
}

const Box = forwardRef<Mesh, MeshProps>(function Box(props, meshRef) {
  // This reference will give us direct access to the mesh
  // const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
});

export default function Section() {
  const meshRef = useRef<Mesh>();

  const handleExport = useCallback(() => {
    const exporter = new STLExporter();

    const result = exporter.parse(meshRef.current, { binary: true });
    saveArrayBuffer(result, "box.stl");
  }, []);

  useEffect(() => {}, []);

  return (
    <section className={styles.Section}>
      <h2>Stl</h2>
      <div>
        <button onClick={handleExport}>export</button>
      </div>
      <div style={{ height: 400 }}>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box ref={meshRef} position={[-1.2, 0, 0]} />
          {/* <Box position={[1.2, 0, 0]} /> */}
        </Canvas>
      </div>
    </section>
  );
}
