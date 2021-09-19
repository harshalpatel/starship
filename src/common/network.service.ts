import got from "got";

export class NetworkService {
  constructor() {}

  private async request<T>(url: string): Promise<T> {
    try {
      // TODO: Add Timeouts
      const res = await got<T>(url, {
        responseType: "json",
      });

      return res.body;
    } catch (e) {
      // TODO: Add error Handling
    }
  }

  async get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }
}
