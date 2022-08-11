import { Request, Response } from "express";
import { SearchTermInput } from "../schema/address.schema";
import { createAddress } from "../service/address.service";

export const createAddressHandler = async (
    req: Request<{}, {}, SearchTermInput["body"]>,
    res: Response
) => {
    try {
        const body = req.body;
        const address = await createAddress({ ...body });
        return res.send(address);
    } catch (error: any) {
        res.status(500).send({ err: error.message })
    }
};
