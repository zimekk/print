import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import StyleContext from "isomorphic-style-loader/StyleContext";
import App from "./App";

// https://dev.to/zeka/generate-a-pdf-in-aws-lambda-with-nodejs-webpack-pug-and-puppeteer-4g59
// https://github.com/kriasoft/isomorphic-style-loader
export default (query) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));

  const body = renderToStaticMarkup(
    <StyleContext.Provider value={{ insertCss }}>
      <App query={query} />
    </StyleContext.Provider>
  );

  return `<!doctype html>
    <html>
      <head>
        <style>${[...css].join("")}</style>
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
    </html>`;
};
