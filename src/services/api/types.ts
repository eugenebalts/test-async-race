export type QueryParams = Record<string, string>;

export interface IApiResponse<T> {
  data: T;
  headers: Headers;
}
