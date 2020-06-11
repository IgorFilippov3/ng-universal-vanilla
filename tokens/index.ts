import { InjectionToken } from "@angular/core";
import { IncomingMessage } from "http";

export declare const REQUEST: InjectionToken<IncomingMessage>;

// (req as any).cookies = parse(req.headers.cookie);

//   fs.readFile(path, async (error, file) => {
//     if (error) {
//       const html = await renderTemplate(`${distFolder}/index.html`, {
//         url: `http://${req.headers.host}${req.url}`,
//         bootstrap: AppServerModule,
//         providers: [
//           { provide: APP_BASE_HREF, useValue: baseHref },
//           { provide: req, useValue: REQUEST }
//         ]
//       });
//       res.writeHead(200);
//       res.end(html);
//     } else {

//       if (req.url.includes(".js")) {
//         res.setHeader("Content-Type", "application/javascript")
//       }

//       if (req.url.includes(".css")) {
//         res.setHeader("Content-Type", "text/css");
//       }

//       res.writeHead(200);
//       res.end(file);
//     }
//   });