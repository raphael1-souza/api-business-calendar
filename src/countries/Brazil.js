import { formatISO } from 'date-fns';

class Brazil {
  constructor() {
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
    this.populate();
  }

  populate() {
    this.holidays.set(
      formatISO(new Date('2020-04-21'), { representation: 'date' }),
      'tiradentes'
    );
    this.holidays.set(
      formatISO(new Date('2020-05-01'), { representation: 'date' }),
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
