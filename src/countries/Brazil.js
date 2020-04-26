import helper from '../helpers';
import Country from './Country';

class Brazil extends Country {
  constructor(year) {
    super();
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
    super.addHoliday(new Date(`${year}-04-21`), 'Tiradentes');
    super.addHoliday(new Date(`${year}-05-01`), 'Trabalhador');
    super.addHoliday(helper.getEaster(year), 'Pascoa');
  }

  getStates() {
    return {
      first: this.STATES[0],
      size: this.STATES.length,
    };
  }
}

export default Brazil;
