"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var prettier_1 = __importDefault(require("prettier"));
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
render();
function render() {
    var html = server_1["default"].renderToStaticMarkup(react_1["default"].createElement(HelloWorldPage, null));
    var htmlWDoc = "<!DOCTYPE html>" + html;
    var prettyHtml = prettier_1["default"].format(htmlWDoc, { parser: "html" });
    var outputFile = "./output.html";
    fs.writeFileSync(outputFile, prettyHtml);
    console.log("Wrote " + outputFile);
}
function HelloWorldPage() {
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("head", null,
            react_1["default"].createElement("meta", { charSet: "utf-8" }),
            react_1["default"].createElement("title", null, "Hello world")),
        react_1["default"].createElement("body", null,
            react_1["default"].createElement("h1", null, "Hello world"))));
}
