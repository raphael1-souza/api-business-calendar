import { formatISO } from 'date-fns';

class Country {
  constructor(name, oficialName) {
    this.name = name;
    this.oficialName = oficialName;
    this.holidays = new Map();
  }

  getName() {
    return this.name;
  }

  getOficialName() {
    return this.oficialName;
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
