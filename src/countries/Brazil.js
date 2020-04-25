import { formatISO } from 'date-fns';
import helper from '../helpers';

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
    this.addHoliday(`${year}-04-21`, 'Tiradentes');
    this.addHoliday(`${year}-05-01`, 'Trabalhador');
    this.addHoliday(helper.getEaster(year), 'Pascoa');
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
