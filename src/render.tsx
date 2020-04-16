import * as fs from "fs";
import * as path from "path";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

/**
 * render
 */
function render() {
  let outputFile = "./output.html";
  let html = ReactDOMServer.renderToStaticMarkup(<HelloWorldPage />);
  let htmlWDoc = "<!DOCTYPE html>" + html;
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
  makeRequiredDir(outputFile);
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

export default render;

/**
 * HelloWorldPage
 */
function HelloWorldPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hello world</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}

/**
 * makeRequiredDir
 */
export function makeRequiredDir(filepath: string) {
  let dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
