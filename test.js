const path = require("path");

const browserFolder = path.join(process.cwd(), "dist/ng-universal-vanilla/browser");
const indexTemplate = path.join(browserFolder, "index.html");
console.log(indexTemplate);