import "zone.js/dist/zone-node";
import { createServer, IncomingMessage, ServerResponse, Server } from "http";
import { AppServerModule } from "./src/main.server";
import { APP_BASE_HREF } from "@angular/common";
import { join } from "path";
import { renderEngine } from "./render-engine";

const browserFolder: string = join(process.cwd(), "dist/ng-universal-vanilla/browser");
const indexTemplate: string = join(browserFolder, "index.html");
const port = process.env.PORT || 4000;

const renderTemplate = renderEngine();

const app: Server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  
  const html = await renderTemplate(indexTemplate, {
    url: `http://${req.headers.host}${req.url}`,
    bootstrap: AppServerModule,
    providers: [
      { provide: APP_BASE_HREF, useValue: "/" },
    ]
  });

  res.writeHead(200);
  res.end(html);
});

app.listen(port, () => console.log(`Server is listening at ${port} port`));