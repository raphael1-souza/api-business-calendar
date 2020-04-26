import { formatISO, parseISO, isValid } from 'date-fns';
import UnitedStates from '../countries/UnitedStates';

class BusinessCalendarController {
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
