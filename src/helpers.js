/**
 * Calculates Easter in the Gregorian/Western (Catholic and Protestant) calendar
 * based on the algorithm by Oudin (1940) from http://www.tondering.dk/claus/cal/easter.php
 * code from from https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
 * @returns {array} [int month, int day]
 */

function getEaster(year) {
  const f = Math.floor;
  const G = year % 19;
  const C = f(year / 100);
  // related to Epact
  const H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
  // number of days from 21 March to the Paschal full moon
  const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11));
  // weekday for the Paschal full moon
  const J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7;
  // number of days from 21 March to the Sunday on or before the Paschal full moon
  const L = I - J;
  const month = 3 + f((L + 40) / 44);
  const day = L + 28 - 31 * f(month / 4);

  return new Date(`${year}-${month}-${day}`);
}

function nthWeekday(dayOfWeek, n, date) {
  date.setDate(date.getDate() + ((((7 - date.getDay()) % 7) + dayOfWeek) % 7));
  date.setDate(date.getDate() + 7 * (n - 1));
  return date;
}

export { getEaster, nthWeekday };
