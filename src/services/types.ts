export interface CurrentWeatherResponse {
  location: Location;
  current_weather: CurrentWeather;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  time_zone_id: string;
  localtime_epoch_ms: number;
}

export interface CurrentWeather {
  last_updated_epoch: number;
  condition: Condition;
  temp_c: number;
  temp_f: number;
  is_day: boolean;
  wind_speed_mph: number;
  wind_speed_kph: number;
  wind_degree: number;
  wind_dir: string;
  humidity: number;
  feelslike_c: number;
  feelslike_f: number;
  uv: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}
