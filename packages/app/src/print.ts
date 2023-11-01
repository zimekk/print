import { Router, json } from "express";
import puppeteer from "puppeteer";
import wkhtmltopdf from "wkhtmltopdf";
import renderHtml from "@dev/doc";

Object.assign(
  wkhtmltopdf,
  process.env.WKHTMLTOPDF_COMMAND && {
    command: process.env.WKHTMLTOPDF_COMMAND,
  },
  process.env.WKHTMLTOPDF_SHELL && {
    shell: process.env.WKHTMLTOPDF_SHELL,
  }
);

// https://dev.to/zeka/generate-a-pdf-in-aws-lambda-with-nodejs-webpack-pug-and-puppeteer-4g59
// https://github.com/kriasoft/isomorphic-style-loader
export default () =>
  Router()
    .use(json())
    .get("/print/:name", async function (req, res) {
      // https://github.com/puppeteer/puppeteer#usage
      const browser = await puppeteer.launch({
        // headless: true,
        // args: ['--disable-dev-shm-usage']
      });
      const page = await browser.newPage();
      const html = await renderHtml(req.params, req.query);

      // https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/
      await page.setContent(html);

      const pdf = await page.pdf({
        format: "a4",
        // printBackground: true,
        margin: {
          top: "0.5cm",
          right: "0.5cm",
          bottom: "0.5cm",
          left: "0.5cm",
        },
      });

      await browser.close();

      // https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/
      res.set({
        "Content-Type": "application/pdf",
        "Content-Length": pdf.length,
      });
      res.send(pdf);
    })
    .get("/wkhtmltopdf/:name", async function (req, res) {
      // https://github.com/devongovett/node-wkhtmltopdf
      const html = await renderHtml(req.params, req.query);
      wkhtmltopdf(html, {
        // https://wkhtmltopdf.org/usage/wkhtmltopdf.txt
        marginTop: "0.5cm",
        marginRight: "1.0cm",
        marginBottom: "4.0cm",
        marginLeft: "1.0cm",
        footerCenter: "[sitepage]/[sitepages]",
        footerFontSize: "8",
        // https://doc.qt.io/archives/qt-4.8/qprinter.html#Orientation-enum
        orientation: "Portrait",
        // orientation: 'Landscape',
        // https://doc.qt.io/archives/qt-4.8/qprinter.html#PaperSize-enum
        pageSize: "A4",
        // pageSize: 'letter'
      }).pipe(res);
    });
