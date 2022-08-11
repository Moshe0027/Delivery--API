import { Express, Request, Response } from 'express'
import { searchTermSchema } from "./schema/address.schema";
import validateResource from './middleware/validateResource';
import {createAddressHandler } from './controller/address.controller';

const routes = (app: Express) => {

    app.post('/resolve-address', [validateResource(searchTermSchema)], createAddressHandler);
    
    app.delete('/deliveries/:delivery_id')
    

}

export default routes