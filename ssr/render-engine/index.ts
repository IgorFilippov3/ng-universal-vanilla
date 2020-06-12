import { ɵCommonEngine as CommonEngine, ɵRenderOptions as RenderOptions } from "@nguniversal/common/engine";
import { readFileSync } from "fs";

const templateCache = {};

export function renderEngine() {
  const engine: CommonEngine = new CommonEngine();

  return async function (filepath: string, renderOptions: RenderOptions) {
    try {
      if (templateCache[filepath]) {
        renderOptions.document = templateCache[filepath];
      } else {
        renderOptions.document = readFileSync(filepath).toString();
        templateCache[filepath] = renderOptions.document;
      }

      return await engine.render(renderOptions);

    } catch (err) {
      throw new Error(err);
    }
  }
}