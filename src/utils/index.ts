const PRESSURE_UNITS = 0.750062;

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const convertPressure = (pressure: number | undefined) => {
  if (pressure) {
    return Math.round(pressure * PRESSURE_UNITS);
  }
};

export const getTime = (second: number) => {
  return new Date(second * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' });
};
