import { add } from 'date-fns';
import { getEaster } from '../../../utils/helpers';
import Country from '../Country';
import months from '../../../utils/constants';

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
    super.addHoliday(new Date(year, months.JAN, 1), 'Ano novo');

    super.addHoliday(new Date(year, months.APR, 21), 'Tiradentes');

    super.addHoliday(new Date(year, months.MAY, 1), 'Dia Mundial do Trabalho');

    super.addHoliday(new Date(year, months.SEP, 7), 'Independência do Brasil');

    super.addHoliday(new Date(year, months.OCT, 12), 'Nossa Senhora Aparecida');

    super.addHoliday(new Date(year, months.NOV, 2), 'Finados');

    super.addHoliday(
      new Date(year, months.NOV, 15),
      'Proclamação da República'
    );

    super.addHoliday(new Date(year, months.DEC, 25), 'Natal');

    const easter = getEaster(year);
    super.addHoliday(add(easter, { days: -2 }), 'Sexta feira santa');

    super.addHoliday(easter, 'Páscoa');

    super.addHoliday(add(easter, { days: 60 }), 'Corpus Christi');

    const quaresma = add(easter, { days: 46 });
    super.addHoliday(quaresma, 'Quarta-feira de cinzas (Início da Quaresma)');

    super.addHoliday(add(quaresma, { days: -1 }), 'Carnaval');
  }

  getStates() {
    return {
      first: this.STATES[0],
      size: this.STATES.length,
    };
  }
}

export default Brazil;
