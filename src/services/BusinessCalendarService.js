import { formatISO, parseISO, isValid } from 'date-fns';
<<<<<<< HEAD
import UnitedStates from '../countries/UnitedStates';
=======
import { countryExists } from '../countries/CountryProxy';
>>>>>>> 8230d30... update route from listdays, payload send from req.body

class BusinessCalendarService {
  isBusinessDay(dateObject) {
    const date = formatISO(dateObject, { representation: 'date' });
    const typeDate = new Date(date);
    const year = typeDate.getFullYear();
    const usa = new UnitedStates(year);
    const { holidays } = usa.getHolidays();
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

<<<<<<< HEAD
  listDays(dateList) {
=======
  listDays(dateList, country) {
    const countryObject = countryExists(country);
    if (!countryObject) {
      return {
        error: 'Country not Found',
      };
    }

>>>>>>> 8230d30... update route from listdays, payload send from req.body
    let date;

    const datesResult = dateList.map((dateString) => {
      date = parseISO(dateString);
      const result = isValid(date);
      if (result !== false) {
<<<<<<< HEAD
        return this.isBusinessDay(date);
=======
        return this.isBusinessDay(date, countryObject);
>>>>>>> 8230d30... update route from listdays, payload send from req.body
      }
      return {
        error: `invalid date: ${dateString}`,
      };
    });

    return datesResult;
  }
}

export default new BusinessCalendarService();
