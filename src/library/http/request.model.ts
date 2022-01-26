export class request<T> {
  count: number = this.json.count;
  filters: {
    dateFrom: string,
    dateTo: string,
    permission: string,
  } = this.json.filters;
  result: T = this.json[this.key];

  constructor(private json: any, private key: string) {}

  static toModel<T>(json: any, key: string) {
    return new this<T>(json, key);
  }
}
