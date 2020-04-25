import { formatISO, parseISO, isValid } from 'date-fns';
import Brazil from '../countries/Brazil';

class BusinessCalendarController {
  isBusinessDay(dateObject) {
    const dateString = formatISO(dateObject, { representation: 'date' });
    const date = dateString;
    const brazil = new Brazil();
    const { holidays } = brazil.getHolidays();
    let holiday = false;
    let description = 'business day';

    // Feriado
    if (holidays.has(dateString)) {
      holiday = true;
      description = holidays.get(dateString);

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
