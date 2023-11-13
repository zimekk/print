import React, { type ChangeEventHandler, useCallback, useState } from "react";
import { Document, Page } from "react-pdf";
import styles from "./styles.module.scss";

const SCALE = [0.5, 1, 2, 5];

const options = {
  worker: require("pdfjs-dist/build/pdf.worker.min.js"),
};

const getUri = (blob: Blob) =>
  new Promise((resolve) =>
    Object.assign(new FileReader(), {
      onload: ({ target }) => resolve(target.result),
    }).readAsDataURL(blob),
  );

function Upload({ onUpload }) {
  // https://stackoverflow.com/questions/61985832/how-to-load-image-and-convert-to-blob-in-react
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    async ({ target }) => {
      const file = target.files.item(0);
      onUpload(await getUri(file));
      target.value = "";
    },
    [],
  );
  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
}

function File({ file, scale }: { file: string; scale: number }) {
  const [numPages, setNumPages] = useState<number>();

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  return (
    <div>
      <div>{file.split(";")[0]}</div>
      <div>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              scale={scale}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default function Section() {
  const [files, setFiles] = useState<string[]>([]);
  const [scale, setScale] = useState<number>(SCALE[1]);

  const handleUpload = useCallback(
    (file: string) => {
      setFiles((files) => files.concat(file));
    },
    [setFiles],
  );

  return (
    <section className={styles.Section}>
      <h2>Render</h2>
      <div>
        <label>
          scale
          <select
            onChange={useCallback(
              ({ target }) => setScale(Number(target.value)),
              [],
            )}
          >
            {SCALE.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      {files.map((item, key) => (
        <File key={key} file={item} scale={scale} />
      ))}
      <Upload onUpload={handleUpload} />
    </section>
  );
}
