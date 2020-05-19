import { parseISO } from 'date-fns';
import BusinessCalendarService from '../services/BusinessCalendarService';
import CheckInputService from '../services/CheckInputService';

class BusinessCalendarController {
  checkDate(req, res) {
    const { date } = req.params;
    BusinessCalendarService.getInfo(date);
    return res.json(date);
  }

  isBusinessDay(req, res) {
    let { date, country } = req.params;

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
      // o Lint Estava falhando aqui, precisei por esta linha, verificar se faz sentido
      const isNumber = (value) => !Number.isNaN(Number(value));
      if (!isNumber(date)) {
        return res.json(BusinessCalendarService.isBusinessDay(date, country));
      }
    }

    return res.json(date);
  }

  listDays(req, res) {
    const { dates, country } = req.body;

    if (!CheckInputService.checkCountry(country)) {
      return res
        .status(400)
        .json({ status: 'Insert ISO3 code from country and retry' });
    }
    if (!CheckInputService.checkListDates(dates)) {
      return res
        .status(400)
        .json({ status: 'Insert valid list dates (YYYY-MM-DD) from search' });
    }

    const datesRes = BusinessCalendarService.listDays(dates, country);

    return res.json(datesRes);
  }
}

export default new BusinessCalendarController();
