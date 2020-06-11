import {ɵCommonEngine as CommonEngine, ɵRenderOptions as RenderOptions} from "@nguniversal/common/engine";
import * as fs from "fs";

const templateCache = {};

export function renderEngine() {
  const engine: CommonEngine = new CommonEngine();

  return async function (filepath: string, renderOptions: RenderOptions) {
    try {
      if (templateCache[filepath]) {
        renderOptions.document = templateCache[filepath];
      } else {
        renderOptions.document = fs.readFileSync(filepath).toString();
      }

      return await engine.render(renderOptions);
      
    } catch (err) {
      throw new Error(err);
    }
  }
}