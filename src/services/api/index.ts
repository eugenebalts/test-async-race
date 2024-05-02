import { IApiResponse, QueryParams } from './types';

class Api {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  }

  private async request<T>(
    url: string,
    options: RequestInit,
    queryParams?: QueryParams,
  ): Promise<IApiResponse<T>> {
    const queryString: string = queryParams ? new URLSearchParams(queryParams).toString() : '';
    const fullUrl: string = `${url}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    return {
      data,
      headers: response.headers,
    };
  }

  public async get<T>(path: string, queryParams?: QueryParams): Promise<IApiResponse<T>> {
    return this.request<T>(`${this.baseUrl}/${path}`, { method: 'GET' }, queryParams);
  }

  public async post<T>(
    path: string,
    body: unknown,
    queryParams?: QueryParams,
  ): Promise<IApiResponse<T>> {
    return this.request<T>(
      `${this.baseUrl}/${path}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
      queryParams,
    );
  }

  public async put<T>(
    path: string,
    body: unknown,
    queryParams?: QueryParams,
  ): Promise<IApiResponse<T>> {
    return this.request<T>(
      `${this.baseUrl}/${path}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
      queryParams,
    );
  }

  public async patch<T>(
    path: string,
    body: unknown,
    queryParams?: QueryParams,
  ): Promise<IApiResponse<T>> {
    return this.request<T>(
      `${this.baseUrl}/${path}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
      queryParams,
    );
  }

  public async delete<T>(path: string): Promise<IApiResponse<T>> {
    return this.request<T>(`${this.baseUrl}/${path}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default new Api();
