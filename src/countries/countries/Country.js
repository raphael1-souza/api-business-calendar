import { formatISO } from 'date-fns';

class Country {
  constructor() {
    this.holidays = new Map();
  }

  addHoliday(date, description) {
    const dateString = formatISO(date, { representation: 'date' });

    if (this.holidays.has(dateString)) {
      const oldDescription = this.holidays.get(dateString);
      description = `${oldDescription}; ${description}`;
    }

    this.holidays.set(dateString, description);
  }

  getHolidays() {
    return {
      type: typeof this.holidays,
      size: this.holidays.size,
      holidays: this.holidays,
    };
  }
}

export default Country;
