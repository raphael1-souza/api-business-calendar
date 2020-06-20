import { add } from 'date-fns';
import Country from '../../../models/Country';
import months from '../../constants';

import nthWeekday from './helpers';

class USA extends Country {
  constructor(year) {
    super('Estados Unidos', 'Estados Unidos da América');
    this.STATES = [
      'AL',
      'AK',
      'AS',
      'AZ',
      'AR',
      'CA',
      'CO',
      'CT',
      'DE',
      'DC',
      'FL',
      'GA',
      'GU',
      'HI',
      'ID',
      'IL',
      'IN',
      'IA',
      'KS',
      'KY',
      'LA',
      'ME',
      'MD',
      'MH',
      'MA',
      'MI',
      'FM',
      'MN',
      'MS',
      'MO',
      'MT',
      'NE',
      'NV',
      'NH',
      'NJ',
      'NM',
      'NY',
      'NC',
      'ND',
      'MP',
      'OH',
      'OK',
      'OR',
      'PW',
      'PA',
      'PR',
      'RI',
      'SC',
      'SD',
      'TN',
      'TX',
      'UT',
      'VT',
      'VA',
      'VI',
      'WA',
      'WV',
      'WI',
      'WY',
    ];
    this.populate(year);
  }

  populate(year) {
    let name;
    let date;
    let dateObserved;

    // New Year's Day
    name = "New Year's Day";
    date = new Date(year, months.JAN, 1);
    super.addHoliday(date, name);

    if (date.getDay() === 0) {
      date = add(date, { days: 1 });
      super.addHoliday(date, `${name} (Observed)`);
    }

    date = new Date(year, months.DEC, 31);
    if (date.getDay() === 5) {
      super.addHoliday(date, `${name} (Observed)`);
    }

    // Martin Luther King Day
    name = 'Martin Luther King Day';
    if (year >= 1986) {
      date = nthWeekday(1, 3, new Date(year, months.JAN, 1));
      super.addHoliday(date, name);
    }

    //  Washington's Birthday
    name = "Washington's Birthday";
    date = nthWeekday(1, 3, new Date(year, months.FEB, 1));
    super.addHoliday(date, name);

    // Memorial Day
    name = 'Memorial Day';
    if (year > 1970) {
      date = new Date(year, months.MAY, 31);
      if (date.getDay() === 1) {
        super.addHoliday(date, name);
      } else {
        date = nthWeekday(1, 0, new Date(year, months.MAY, 31));
        super.addHoliday(date, name);
      }
    } else if (year >= 1888) {
      super.addHoliday(new Date(`${year}-05-30`), name);
    }

    // Independence Day
    if (year > 1870) {
      name = 'Independence Day';
      date = new Date(year, months.JUL, 4);
      super.addHoliday(date, name);

      if (date.getDay() === 0) {
        dateObserved = add(date, { days: 1 });
        super.addHoliday(dateObserved, `${name} (Observed)`);
      } else if (date.getDay() === 6) {
        dateObserved = add(date, { days: -1 });
        super.addHoliday(dateObserved, `${name} (Observed)`);
      }
    }

    //  Labor Day
    if (year >= 1894) {
      name = 'Labor Day';
      date = nthWeekday(1, 1, new Date(year, months.SEP, 1));
      super.addHoliday(date, name);
    }

    //  Columbus Day
    name = 'Columbus Day';

    if (year >= 1970) {
      date = nthWeekday(1, 2, new Date(year, months.OCT, 1));
      super.addHoliday(date, name);
    } else if (year >= 1937) {
      super.addHoliday(new Date(year, months.OCT, 12), name);
    }

    //  Veterans Day
    if (year > 1953) name = 'Veterans Day';
    else name = 'Armistice Day';

    if (year < 1978 > 1970) {
      date = nthWeekday(1, 4, new Date(year, months.OCT, 1));
      super.addHoliday(date, name);
    } else if (year >= 1938) {
      date = new Date(year, months.NOV, 11);
      super.addHoliday(date, name);

      if (date.getDay() === 0) {
        dateObserved = add(date, { days: 1 });
        super.addHoliday(dateObserved, `${name} (Observed)`);
      } else if (date.getDay() === 6) {
        dateObserved = add(date, { days: -1 });
        super.addHoliday(dateObserved, `${name} (Observed)`);
      }
    }

    //  Thanksgiving
    if (year > 1870) {
      name = 'Thanksgiving';
      date = nthWeekday(4, 4, new Date(year, months.NOV, 1));
      super.addHoliday(date, name);
    }

    // Christmas Day
    if (year > 1870) {
      name = 'Christmas Day';
      date = new Date(year, months.DEC, 25);
      super.addHoliday(date, name);

      if (date.getDay() === 0) {
        dateObserved = add(date, { days: 1 });
        super.addHoliday(dateObserved, `${name} (Observed)`);
      } else if (date.getDay() === 6) {
        dateObserved = add(date, { days: -1 });
        super.addHoliday(dateObserved, `${name} (Observed)`);
      }
    }
  }

  getStates() {
    return {
      first: this.STATES[0],
      size: this.STATES.length,
    };
  }
}

export default USA;
