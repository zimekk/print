import React, { useState, useRef } from "react";
import preprocessImage from "./preprocess";
import Tesseract from "tesseract.js";
import styles from "./styles.module.scss";

// https://www.smashingmagazine.com/2021/06/image-text-conversion-react-tesseract-js-ocr/
// https://github.com/smashingmagazine/image-to-text
function Reader() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  // const [pin, setPin] = useState("");
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    // setImage(`${window.location.origin}/${event.target.files[0].name}`);
    // const image = preprocessImage(canvasObj, event.target.files[0]);
  };

  const handleClick = () => {
    const canvas = canvasRef.current;
    canvas.width = imageRef.current.width;
    canvas.height = imageRef.current.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(imageRef.current, 0, 0);
    ctx.putImageData(preprocessImage(canvas), 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg");

    Tesseract.recognize(dataUrl, "eng", {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result);

        if (result) {
          const { data } = result;
          // Get Confidence score
          let confidence = data.confidence;
          // Get full output
          let text = data.text;

          setText(text);
          // setPin(patterns);
        }
      });
  };

  return (
    <div className="App">
      <main className="App-main">
        {image && (
          <>
            <h3>Actual image uploaded</h3>
            <img src={image} className="App-logo" alt="logo" ref={imageRef} />
            <h3>Canvas</h3>
            <canvas ref={canvasRef} width={700} height={300}></canvas>
            <h3>Extracted text</h3>
            <div className="pin-box">
              <p> {text} </p>
            </div>
          </>
        )}
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{ height: 50 }}>
          Convert to text
        </button>
      </main>
    </div>
  );
}

export default function Section() {
  return (
    <section className={styles.Section}>
      <h2>Reader</h2>
      <Reader />
    </section>
  );
}
