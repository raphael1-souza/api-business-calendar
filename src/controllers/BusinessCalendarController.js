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
    if (date) {
      date = parseISO(date);
      if (!isNaN(date)) {
        return res.json(BusinessCalendarService.isBusinessDay(date));
      }
    }
    if (!country) {
      return res.json({
        error: 'Please inform country',
      });
    }

    return res.json(date);
  }

  listDays(req, res) {
    let { dates } = req.params;
    const { country } = req.params;
    if (!country) {
      return res.json({
        error: 'Please inform country',
      });
    }
    dates = dates.split(',');
    const datesRes = BusinessCalendarService.listDays(dates);

    return res.json(datesRes);
  }
}

export default new BusinessCalendarController();
