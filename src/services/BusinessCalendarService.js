import { formatISO, parseISO, isValid } from 'date-fns';
import { countryExists } from '../countries';

class BusinessCalendarService {
  isBusinessDay(dateObject, Country) {
    const date = formatISO(dateObject, { representation: 'date' });
    const typeDate = new Date(date);
    const year = typeDate.getFullYear();
    const country = new Country(year);
    const { holidays } = country.getHolidays();
    let holiday = false;
    let description = 'Business day';
    if (typeDate.getDay() === 0 || typeDate.getDay() === 6) {
      description = 'Weekend';
    }

    // Feriado
    if (holidays.has(date)) {
      holiday = true;
      description = holidays.get(date);

      return {
        date,
        description,
        holiday,
      };
    }
    // Dia útil
    return {
      date,
      description,
      holiday,
    };
  }

  listDays(dateList, country) {
    const countryObject = countryExists(country);
    if (!countryObject) {
      return {
        error: 'Country not Found',
      };
    }

    let date;

    const datesResult = dateList.map((dateString) => {
      date = parseISO(dateString);
      const result = isValid(date);
      if (result !== false) {
        return this.isBusinessDay(date, countryObject);
      }
      return {
        error: `invalid date: ${dateString}`,
      };
    });

    return datesResult;
  }
}

export default new BusinessCalendarService();
