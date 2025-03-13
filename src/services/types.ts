export interface CurrentWeatherResponse {
  location: Location;
  current: CurrentWeather;
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
  wind_mph: number;
  wind_kph: number;
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
