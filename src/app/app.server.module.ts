import { NgModule, Inject, Injectable, Optional } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { REQUEST } from "../../ssr/tokens";
import { IncomingMessageWithCookies } from "../../ssr/models";

@Injectable()
export class IncomingServerRequest {
  constructor(@Inject(REQUEST) private request: IncomingMessageWithCookies) { }

  getHeaders() {
    console.log(this.request.headers, "headers");
  }

  getCookies() {
    console.log(this.request.cookies)
  }
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: "INCOMING_REQUEST", useClass: IncomingServerRequest },
  ]
})
export class AppServerModule {
  constructor(@Optional() @Inject("INCOMING_REQUEST") private request: IncomingServerRequest) {
    this.request.getHeaders();
    this.request.getCookies();
  }
}
