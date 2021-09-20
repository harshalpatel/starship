import { HttpException, Injectable } from "@nestjs/common";
import got, { Response } from "got";

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

      switch (response.statusCode) {
        case 404:
          throw new HttpException(`Invalid Pokemon`, 400);
      }
      throw new HttpException(response.body, 500);
    }
  }

  async get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }
}
