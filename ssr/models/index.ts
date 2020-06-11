import { IncomingMessage } from "http";

export interface IncomingMessageWithCookies extends IncomingMessage {
  cookies: {[key: string]: string};
}