import { parseISO } from 'date-fns';
import BusinessCalendarService from '../services/BusinessCalendarService';

class BusinessCalendarController {
  checkDate(req, res) {
    const { date } = req.params;
    BusinessCalendarService.getInfo(date);
    return res.json(date);
  }

  isBusinessDay(req, res) {
    let { date, country, state } = req.params;

    try {
      if (!country) throw new Error('Please inform country');

      country = BusinessCalendarService.indentifyCountry(country);
      if (!country) throw new Error('Country couldnt be identified');
    } catch (e) {
      return res.json({
        error: e.message,
      });
    }

    if (date) {
      date = parseISO(date);
      if (!isNaN(date)) {
        return res.json(BusinessCalendarService.isBusinessDay(date, country));
      }
    }

    return res.json(date);
  }

  listDays(req, res) {
    const { dates } = req.params;
    let { country } = req.params;

    try {
      if (!country) throw new Error('Please inform country');

      country = BusinessCalendarService.indentifyCountry(country);
      if (!country) throw new Error('Country couldnt be identified');
    } catch (e) {
      return res.json({
        error: e.message,
      });
    }

    const datesRes = BusinessCalendarService.listDays(dates, country);

    return res.json(datesRes);
  }
}

export default new BusinessCalendarController();
