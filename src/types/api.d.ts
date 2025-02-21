interface WeatherInfo {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface WeatherResponse {
  weather: WeatherInfo[];
  name: string;
  sys: Sys;
  timezone: number;
}
