import { formatISO, parseISO, isValid } from 'date-fns';
import Brazil from '../countries/Brazil';

class BusinessCalendarController {
  isBusinessDay(dateObject) {
    const dateString = formatISO(dateObject, { representation: 'date' });
    const typeDate = new Date(dateString);
    const year = typeDate.getFullYear();
    const brazil = new Brazil(year);
    const { holidays } = brazil.getHolidays();
    let holiday = false;
    let description = 'business day';

    // Feriado
    if (holidays.has(dateString)) {
      holiday = true;
      description = holidays.get(dateString);

      return {
        dateString,
        description,
        holiday,
      };
    }
    // Dia útil
    return {
      dateString,
      description,
      holiday,
    };
  }

  listDays(dateList) {
    let date;

    const datesResult = dateList.map((dateString) => {
      date = parseISO(dateString);
      const result = isValid(date);
      if (result !== false) {
        return this.isBusinessDay(date);
      }
      return {
        error: `invalid date: ${dateString}`,
      };
    });

    return datesResult;
  }
}

export default new BusinessCalendarController();
