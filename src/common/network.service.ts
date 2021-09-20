import { Injectable } from "@nestjs/common";
import got, { HTTPError, Response, RequestError } from "got";

@Injectable()
export class NetworkService {
  constructor() {}

  private async request<T>(url: string): Promise<T> {
    try {
      const res = await got<T>(url, {
        responseType: "json",
        timeout: 10000,
        throwHttpErrors: true,
      });

      return res.body;
    } catch (e) {
      const response: Response = e.response;
      // TODO: Improve error handlings
      throw new HTTPError(response);
    }
  }

  async get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }
}
