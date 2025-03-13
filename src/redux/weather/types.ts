import { CurrentWeatherResponse } from "../../services/types";
import { enumAsTuple } from "../../../utils/type-utils";
import type { ValueOf } from "ts-essentials";

export interface WeatherState {
  currentWeather: CurrentWeatherResponse | null;
  savedLocations: string[];
  loading: boolean;
  error: string | null;
}

export const WEATHER_ACTION_TYPE = {
  FETCH_WEATHER_REQUEST: "fetch-weather-request",
  FETCH_WEATHER_SUCCESS: "fetch-weather-success",
  FETCH_WEATHER_FAILURE: "fetch-weather-failure",
  GET_SAVED_LOCATIONS_SUCCESS: "get-saved-locations-success",
  SAVE_LOCATION_SUCCESS: "save-location-success",
} as const;
export const WEATHER_ACTION_TYPES = enumAsTuple(WEATHER_ACTION_TYPE);
export type WeatherActionType = ValueOf<typeof WEATHER_ACTION_TYPE>;
export type WeatherActionTypes = typeof WEATHER_ACTION_TYPES;
