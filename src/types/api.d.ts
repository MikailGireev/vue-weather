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

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

export interface Coord {
  lat?: number;
  lon?: number;
}

export interface WeatherResponse {
  weather: WeatherInfo[];
  name: string;
  sys: Sys;
  timezone: number;
  coord: Coord;
  humidity: number;
  main: Main;
  wind: Wind;
  clouds: Clouds;
}
