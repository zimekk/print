import React, { useEffect, useRef } from "react";
import Perspective from "perspectivets";
import styles from "./styles.module.scss";

// https://github.com/adonmo/perspective.ts/tree/master/demo
// https://codesandbox.io/s/perspectivets-demo-upqfy
// https://github.com/giacomocerquone/react-perspective-cropper
function Crop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let img = new Image();
    img.onload = () => {
      let cnv = canvasRef.current;
      if (cnv === null) {
        alert("Canvas not loaded");
        return;
      }

      let ctx = cnv.getContext("2d");
      if (ctx === null) {
        alert("Context not loaded");
        return;
      }

      let p = new Perspective(ctx, img);
      p.draw({
        topLeftX: 30,
        topLeftY: 30,
        topRightX: img.width - 50,
        topRightY: 50,
        bottomRightX: img.width - 70,
        bottomRightY: img.height - 30,
        bottomLeftX: 10,
        bottomLeftY: img.height,
      });
    };

    img.src = require("./assets/firefox.jpg").default;
  }, []);

  return <canvas ref={canvasRef} width={512} height={512} />;
}

export default function Section() {
  return (
    <section className={styles.Section}>
      <h2>Crop</h2>
      <Crop />
    </section>
  );
}
