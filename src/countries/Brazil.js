import { formatISO } from 'date-fns';

class Brazil {
  constructor(year) {
    this.holidays = new Map();
    this.STATES = [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PE',
      'PI',
      'PR',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO',
    ];
    this.populate(year);
  }

  populate(year) {
    this.holidays.set(
      formatISO(new Date(`${year}-04-21`), { representation: 'date' }),
      'tiradentes'
    );
    this.holidays.set(
      formatISO(new Date(`${year}-05-01`), { representation: 'date' }),
      'trabalhador'
    );
  }

  getStates() {
    return {
      first: this.STATES[0],
      size: this.STATES.length,
    };
  }

  getHolidays() {
    return {
      type: typeof this.holidays,
      size: this.holidays.size,
      holidays: this.holidays,
    };
  }
}

export default Brazil;
