
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import DeliveryModel, { DeliveryDocument, CompleteDeliveryDocument ,DeleteDeliveryDocument} from "../models/delivery.model";
import courierApi from '../static/courierAPI';
import dayjs from "dayjs";

export const createDelivery = async (input: DocumentDefinition<DeliveryDocument>) => {
    return DeliveryModel.create(input);
}

export const findDelivery = async (query: FilterQuery<DeleteDeliveryDocument | DeliveryDocument>, options: QueryOptions = { lean: true }) => {
    return DeliveryModel.find(query, {}, options);
}


export const findAndUpdateDelivery = async (query: FilterQuery<CompleteDeliveryDocument>,
    update: UpdateQuery<CompleteDeliveryDocument>,) => {
    return DeliveryModel.findOneAndUpdate(query, update);
}

export const deleteDelivery = async (query: FilterQuery<DeliveryDocument>) => {
    return DeliveryModel.deleteOne(query);
}

export const getDailyDelivery = async () => {
    const todayDate = dayjs().format('DD/MM/YYYY');
    const dailyDelivery: any = [];
    courierApi.forEach((element): any => {
        if (todayDate === element.stat_time) {
            dailyDelivery.push(element);
        }
    });
    return dailyDelivery
}

export const getWeeklyDelivery = async () => {
    const todayDate = dayjs().format('DD/MM/YYYY');
    const weeklyDelivery: any = [];
    courierApi.forEach((element): any => {
        if (todayDate === element.stat_time) {
            weeklyDelivery.push(element);
        }
    });
    return weeklyDelivery
}