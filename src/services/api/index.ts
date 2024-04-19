class Api {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  }

  private async request<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  }

  public async get<T>(path: string): Promise<T> {
    return this.request<T>(`${this.baseUrl}/${path}`, { method: 'GET' });
  }
}

export default new Api();
