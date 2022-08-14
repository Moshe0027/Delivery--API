import courierApi from '../static/courierAPI';
import holiday from '../utils/holiday';


export const getTimeslots = async ({ address }:any) => {
    try {
        return courierApi;
    } catch (error: any) {
        return error.message;
    }

}

