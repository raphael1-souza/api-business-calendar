import { formatISO } from 'date-fns';

class Country {
  constructor() {
    this.holidays = new Map();
  }

  addHoliday(dateString, description) {
    if (this.holidays.has(dateString)) {
      const oldDescription = this.holidays.get(dateString);
      description = `${oldDescription}; ${description}`;
    }

    this.holidays.set(
      formatISO(new Date(dateString), { representation: 'date' }),
      description
    );
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
