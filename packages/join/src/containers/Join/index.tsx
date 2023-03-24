import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { PDFDocument } from "pdf-lib";
import styles from "./styles.module.scss";

const getUri = (blob: Blob) =>
  new Promise((resolve) =>
    Object.assign(new FileReader(), {
      onload: ({ target }) => resolve(target.result),
    }).readAsDataURL(blob)
  );

function Upload({ onUpload }) {
  // https://stackoverflow.com/questions/61985832/how-to-load-image-and-convert-to-blob-in-react
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    async ({ target }) => {
      const file = target.files.item(0);
      onUpload(await getUri(file));
      target.value = "";
    },
    []
  );
  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
}

function File({ file }: { file: string }) {
  return <div>{file.split(";")[0]}</div>;
}

function Join({ files }) {
  const ref = useRef<HTMLIFrameElement>(null);

  const handleClick = useCallback(async () => {
    // const existingPdfBytes = files[0];

    // // Load a PDFDocument from the existing PDF bytes
    // const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // // Embed the Helvetica font
    // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // // Get the first page of the document
    // const pages = pdfDoc.getPages()

    // const firstPage = pages[0]

    // // Get the width and height of the first page
    // const { width, height } = firstPage.getSize()

    // // Draw a string of text diagonally across the first page
    // firstPage.drawText('This text was added with JavaScript!', {
    //   x: 5,
    //   y: height / 2 + 300,
    //   size: 50,
    //   font: helveticaFont,
    //   color: rgb(0.95, 0.1, 0.1),
    //   rotate: degrees(-45),
    // })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    // const pdfBytes = await pdfDoc.save()

    // https://github.com/Hopding/pdf-lib/issues/252
    const mergedPdf = await PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
      const pdf = await PDFDocument.load(files[i]);

      const copiedPagesA = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPagesA.forEach((page) => mergedPdf.addPage(page));
    }

    // https://pspdfkit.com/blog/2021/how-to-build-a-javascript-pdf-editor/
    const pdfDataUri = await mergedPdf.saveAsBase64({ dataUri: true });
    ref.current.src = pdfDataUri;
  }, [files, ref]);

  return (
    <div>
      <button onClick={handleClick}>join</button>
      <iframe
        ref={ref}
        style={{
          width: "100%",
          height: "50vh",
        }}
      />
    </div>
  );
}

export default function Section() {
  const [files, setFiles] = useState<string[]>([]);
  useEffect(() => {}, []);

  const handleUpload = useCallback(
    (file: string) => {
      setFiles((files) => files.concat(file));
    },
    [setFiles]
  );

  return (
    <section className={styles.Section}>
      <h2>Join</h2>
      {files.map((item, key) => (
        <File key={key} file={item} />
      ))}
      <Upload onUpload={handleUpload} />
      <Join files={files} />
    </section>
  );
}
