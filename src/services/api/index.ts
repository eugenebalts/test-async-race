import { QueryParams } from './types';

class Api {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  }

  private async request<T>(
    url: string,
    options: RequestInit,
    queryParams?: QueryParams,
  ): Promise<T> {
    const queryString: string = queryParams ? new URLSearchParams(queryParams).toString() : '';
    const fullUrl: string = `${url}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  }

  public async get<T>(path: string, queryParams?: QueryParams): Promise<T> {
    return this.request<T>(`${this.baseUrl}/${path}`, { method: 'GET' }, queryParams);
  }

  public async post<T>(path: string, data: unknown, queryParams?: QueryParams): Promise<T> {
    return this.request<T>(`${this.baseUrl}/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }, queryParams);
  }

  public async put<T>(path: string, data: unknown, queryParams?: QueryParams): Promise<T> {
    return this.request<T>(`${this.baseUrl}/${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }, queryParams);
  }

  public async delete<T>(path: string): Promise<T> {
    return this.request<T>(`${this.baseUrl}/${path}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default new Api();
