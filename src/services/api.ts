import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from "axios";

class ApiClient {
  private client: AxiosInstance;

  constructor(baseUrl: string, headers?: CreateAxiosDefaults["headers"]) {
    this.client = axios.create({
      baseURL: baseUrl,
      ...(headers && { headers }),
    });

    // Add interceptors for auth tokens later
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);

    return response.data;
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);

    return response.data;
  }
}

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";
const headers: CreateAxiosDefaults["headers"] = {
  "Content-Type": "application/json",
};

export const apiClient = new ApiClient(baseUrl, headers);
