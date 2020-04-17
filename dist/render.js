"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
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
