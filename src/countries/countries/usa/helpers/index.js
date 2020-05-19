function nthWeekday(dayOfWeek, n, date) {
  date.setDate(date.getDate() + ((((7 - date.getDay()) % 7) + dayOfWeek) % 7));
  date.setDate(date.getDate() + 7 * (n - 1));
  return date;
}

export default nthWeekday;
