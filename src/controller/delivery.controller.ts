import { Request, Response } from 'express'
import { CreateDeliveryInput, DeliveryInput } from '../schema/delivery.schema'
import {
    createDelivery,
    findDelivery,
    deleteDelivery,
    getDailyDelivery,
    getWeeklyDelivery,
    findAndUpdateDelivery
} from '../service/delivery.service'

export const createDeliveryHandler = async (
    req: Request<{}, {}, CreateDeliveryInput['body']>,
    res: Response
) => {
    try {
        const body = req.body
        const delivery: object = await createDelivery({ ...body })
        return res.send(delivery)
    } catch (error: any) {
        res.status(500).send({ err: error.message })
    }
}

export const completeDeliveryHandler = async (req: Request, res: Response) => {
    try {
        const delivery_id = req.path.split('/')[2]
        await findAndUpdateDelivery({ delivery_id }, { delivery_id, status: true })
        return res.sendStatus(200)
    } catch (error: any) {
        res.status(500).send({ err: error.message })
    }
}

export const dailyDeliveryHandler = async (req: Request, res: Response) => {
    try {
        const dailyDelivery: any = await getDailyDelivery();
        const idDailyDelivery: any = dailyDelivery.map((ele: any) => ele._id);
        const getAllDailyDelivery: any = await findDelivery({
            timeslotId: { $in: idDailyDelivery }
        });
        return res.send(getAllDailyDelivery)
    } catch (error: any) {
        res.status(500).send({ err: error.message })
    }
}

export const weeklyDeliveryHandler = async (req: Request, res: Response) => {
    try {
        const dailyDelivery: any = await getDailyDelivery();
        const idDailyDelivery: any = dailyDelivery.map((ele: any) => ele._id);
        const getAllDailyDelivery: any = await findDelivery({
            timeslotId: { $in: idDailyDelivery }
        });
        return res.send(getAllDailyDelivery)
    } catch (error: any) {
        res.status(500).send({ err: error.message })
    }
}

export const deleteDeliveryHandler = async (
    req: Request<DeliveryInput['params']>,
    res: Response
) => {
    try {
        const deliveryId = req.path.split('/')[2];
        const delivery = await findDelivery({ deliveryId });
        if (!delivery) {
            return res.sendStatus(404)
        }
        await deleteDelivery({ delivery });
        return res.sendStatus(200);
    } catch (error: any) {
        res.status(500).send({ err: error.message })
    }

}
