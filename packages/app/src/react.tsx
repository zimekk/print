import { Router, json } from "express";
import React from "react";
import { Document, Page, Text, renderToStream } from "@react-pdf/renderer";

const MyDocument = () => (
  <Document>
    <Page>
      <Text>React-pdf</Text>
    </Page>
  </Document>
);

export default () =>
  Router()
    .use(json())
    .get("/react/:name", async function (req, res) {
      const pdfStream = await renderToStream(<MyDocument />);
      res.set({
        "Content-Type": "application/pdf",
      });
      pdfStream.pipe(res);
      pdfStream.on("end", () => console.log("Done streaming, response sent."));
    });
