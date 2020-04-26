import { formatISO, add } from 'date-fns';
import helpers from '../helpers';

class UnitedStates {
  constructor(year) {
    this.holidays = new Map();
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
    name = "New Year's Day";
    if (
      !(
        new Date(`${year}-01-01`).getDay() === 0 ||
        new Date(`${year}-01-01`).getDay() === 6
      )
    ) {
      this.holidays.set(
        formatISO(new Date(`${year}-01-01`), { representation: 'date' }),
        name
      );
    } else if (new Date(`${year}-01-01`).getDay() === 0) {
      const date = add(new Date(`${year}-01-01`), { days: 1 });
      this.holidays.set(
        formatISO(date, { representation: 'date' }),
        `${name} (Observed)`
      );
    }
    if (new Date(`${year}-12-31`).getDay() === 5) {
      const date = new Date(`${year}-12-31`);
      this.holidays.set(
        formatISO(date, { representation: 'date' }),
        `${name} (Observed)`
      );
    }

    // Martin Luther King Day
    name = 'Martin Luther King Day';
    if (year >= 1986) {
      this.holidays.set(
        formatISO(helpers.nthWeekday(1, 3, new Date(`${year}-01-01`)), {
          representation: 'date',
        }),
        name
      );
    }

    //  Washington's Birthday
    name = "Washington's Birthday";
    this.holidays.set(
      formatISO(helpers.nthWeekday(1, 3, new Date(`${year}-02-01`)), {
        representation: 'date',
      }),
      name
    );

    // Memorial Day
    name = 'Memorial Day';
    if (year > 1970) {
      this.holidays.set(
        formatISO(helpers.nthWeekday(1, 0, new Date(`${year}-05-31`)), {
          representation: 'date',
        }),
        name
      );
    } else if (year >= 1888) {
      this.holidays.set(
        formatISO(new Date(`${year}-05-30`), { representation: 'date' }),
        name
      );
    }

    // Independence Day
    if (year > 1870) {
      name = 'Independence Day';
      this.holidays.set(
        formatISO(new Date(`${year}-07-04`), { representation: 'date' }),
        name
      );
      if (new Date(`${year}-07-04`).getDay() === 0) {
        const date = add(new Date(`${year}-07-04`), { days: 1 });
        this.holidays.set(
          formatISO(date, { representation: 'date' }),
          `${name} (Observed)`
        );
      } else if (new Date(`${year}-07-04`).getDay() === 6) {
        const date = add(new Date(`${year}-07-04`), { days: -1 });
        this.holidays.set(
          formatISO(date, { representation: 'date' }),
          `${name} (Observed)`
        );
      }
    }

    //  Labor Day
    if (year >= 1894) {
      name = 'Labor Day';
      this.holidays.set(
        formatISO(helpers.nthWeekday(1, 1, new Date(`${year}-09-01`)), {
          representation: 'date',
        }),
        name
      );
    }

    //  Columbus Day
    name = 'Columbus Day';
    if (year >= 1970) {
      this.holidays.set(
        formatISO(helpers.nthWeekday(1, 2, new Date(`${year}-10-01`)), {
          representation: 'date',
        }),
        name
      );
    } else if (year >= 1937) {
      this.holidays.set(
        formatISO(new Date(`${year}-10-12`), {
          representation: 'date',
        }),
        name
      );
    }

    //  Veterans Day
    if (year > 1953) name = 'Veterans Day';
    else name = 'Armistice Day';
    if (year < 1978 > 1970) {
      this.holidays.set(
        formatISO(helpers.nthWeekday(1, 4, new Date(`${year}-10-01`)), {
          representation: 'date',
        }),
        name
      );
    } else if (year >= 1938) {
      this.holidays.set(
        formatISO(new Date(`${year}-11-11`), { representation: 'date' }),
        name
      );
      if (new Date(`${year}-11-11`).getDay() === 0) {
        const date = add(new Date(`${year}-11-11`), { days: 1 });
        this.holidays.set(
          formatISO(date, { representation: 'date' }),
          `${name} (Observed)`
        );
      } else if (new Date(`${year}-11-11`).getDay() === 6) {
        const date = add(new Date(`${year}-11-11`), { days: -1 });
        this.holidays.set(
          formatISO(date, { representation: 'date' }),
          `${name} (Observed)`
        );
      }
    }

    //  Thanksgiving
    if (year > 1870) {
      name = 'Thanksgiving';
      this.holidays.set(
        formatISO(helpers.nthWeekday(4, 4, new Date(`${year}-11-01`)), {
          representation: 'date',
        }),
        name
      );
    }

    // Christmas Day
    if (year > 1870) {
      name = 'Christmas Day';
      this.holidays.set(
        formatISO(new Date(`${year}-12-25`), { representation: 'date' }),
        name
      );
      if (new Date(`${year}-12-25`).getDay() === 0) {
        const date = add(new Date(`${year}-12-25`), { days: 1 });
        this.holidays.set(
          formatISO(date, { representation: 'date' }),
          `${name} (Observed)`
        );
      } else if (new Date(`${year}-12-25`).getDay() === 6) {
        const date = add(new Date(`${year}-12-25`), { days: -1 });
        this.holidays.set(
          formatISO(date, { representation: 'date' }),
          `${name} (Observed)`
        );
      }
    }
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

export default UnitedStates;
