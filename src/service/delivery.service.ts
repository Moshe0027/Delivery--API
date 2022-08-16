
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import DeliveryModel, { DeliveryDocument, CompleteDeliveryDocument, DeleteDeliveryDocument } from "../models/delivery.model";
import courierApi from '../static/courierAPI';
import dayjs from "dayjs";
import holiday from "../utils/holiday";

export const createDelivery = async (input: DocumentDefinition<DeliveryDocument>) => {
    const datesHolidayMap = new Map<string,boolean>();
    const datesHoliday = await holiday();
    datesHoliday.forEach((holiday: any) => {
        const date = String(dayjs(holiday.date, 'YYYY-DD-MM').format('DD/MM/YYYY'));
        datesHolidayMap.set(date, true);
    })
    const ifExistsHoliday:any = courierApi.find((date:any) => {
        if (date._id === input.timeslotId ) {
            if (datesHolidayMap.get(date.stat_time) || datesHolidayMap.get(date.end_time)) { 
                return true;
            }
        }
    })
    if (ifExistsHoliday) { 
        return false;
    };
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
    const todayDate = dayjs();
    const week = 1;
    const weeklyDelivery: any = [];
    courierApi.forEach((element): any => {
        const startTime = dayjs(element.stat_time, 'DD/MM/YYYY');
        const endTime = dayjs(element.end_time, 'DD/MM/YYYY');
        if (startTime.diff(todayDate,'week') >= week || endTime.diff(todayDate,'week') >= week) {
            weeklyDelivery.push(element);
        } 
    });
    return weeklyDelivery
}