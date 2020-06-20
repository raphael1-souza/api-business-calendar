import { Router } from 'express';
import BusinessCalendar from './controllers/BusinessCalendarController';

const routes = new Router();

routes.get('/checkDate/:date', BusinessCalendar.checkDate);

routes.get(
  '/isbusinessday/:date/:country?/:state?',
  BusinessCalendar.isBusinessDay
);

routes.get('/listdays', BusinessCalendar.listDays);

export default routes;
