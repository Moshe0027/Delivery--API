import { Express, Request, Response } from 'express'
import { searchTermSchema } from "./schema/address.schema";
import { getTimeslotsSchema } from './schema/timeslots.schema';
import { createDeliverySchema, deliverySchema } from './schema/delivery.schema';
import { createAddressHandler } from './controller/address.controller';
import { getTimeslotHandler } from './controller/timesolts.controller';
import { createDeliveryHandler , deleteDeliveryHandler , dailyDeliveryHandler , weeklyDeliveryHandler ,completeDeliveryHandler} from './controller/delivery.controller';
import validateResource from './middleware/validateResource';

const routes = (app: Express) => {

    app.post('/resolve-address', [validateResource(searchTermSchema)], createAddressHandler);

    app.post('/timeslots', [validateResource(getTimeslotsSchema)], getTimeslotHandler);

    app.post('/deliveries', [validateResource(createDeliverySchema)], createDeliveryHandler);
    
    app.post('/deliveries/:delivery_id/complete', [completeDeliveryHandler])
    
    app.delete('/deliveries/:delivery_id', deleteDeliveryHandler);

    app.get('/deliveries/daily', dailyDeliveryHandler);

    app.get('/deliveries/weekly', weeklyDeliveryHandler);

}

export default routes