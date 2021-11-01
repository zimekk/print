import { Router, json } from "express";
import puppeteer from "puppeteer";
import renderHtml from "./render";

// https://dev.to/zeka/generate-a-pdf-in-aws-lambda-with-nodejs-webpack-pug-and-puppeteer-4g59
// https://github.com/kriasoft/isomorphic-style-loader
export default () =>
  Router()
    .use(json())
    .get("/print/:name", async function (req, res) {
      const { name } = req.params;
      console.log({ name });

      // https://github.com/puppeteer/puppeteer#usage
      const browser = await puppeteer.launch({
        // headless: true,
        // args: ['--disable-dev-shm-usage']
      });
      const page = await browser.newPage();
      // await page.goto('https://blog.risingstack.com', {waitUntil: 'networkidle0'});
      // await page.goto('https://example.com');
      // await page.screenshot({ path: 'example.png' });

      const html = renderHtml(req.query);
      // console.log({html})

      // https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/
      await page.setContent(html);

      const pdf = await page.pdf({
        format: "a4",
        // printBackground: true,
        // margin: {
        //   top: "1.5cm",
        //   right: "1.5cm",
        //   bottom: "1.5cm",
        //   left: "1.5cm",
        // },
      });

      await browser.close();

      // https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/
      res.set({
        "Content-Type": "application/pdf",
        "Content-Length": pdf.length,
      });
      res.send(pdf);
    });
