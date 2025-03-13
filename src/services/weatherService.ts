import { apiClient } from "./api";
import { CurrentWeatherResponse } from "./types";

export const weatherService = {
  getCurrentWeather: async (location: string): Promise<CurrentWeatherResponse> => {
    console.log(`/weather/current?location=${encodeURIComponent(location)}`);
    return apiClient.get<CurrentWeatherResponse>(
      `/weather/current?location=${encodeURIComponent(location)}`,
    );
  },
};
