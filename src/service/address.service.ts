
import {FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import AddressModel, { AddressDocument } from "../models/address.model";
import geocodig from "../utils/geocodig";
export const createAddress = async ({ searchTerm }: any) => {
    try {
        const address = await geocodig(searchTerm);
        if (address) {
            return AddressModel.create(address);
        }

    } catch (error: any) {
        return error.message;
    }

}

export const findAddress = async (query: FilterQuery<AddressDocument>, options: QueryOptions = { lean: true }) => {
    return AddressModel.find(query, {}, options);
}
