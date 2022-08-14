import { object, string, TypeOf } from 'zod';

const payload = {
    body: object({
        user: string({
            required_error: 'User is required'
        }),
        timeslotId: string({
            required_error: 'timeslotId is required'
        }),
    })
}
const params = {
    params: object({
        delivery_id: string({
            required_error: 'delivery_id is required'
        })
    })
}

export const createDeliverySchema = object({
    ...payload
})

export const deliverySchema = object({
    ...params
})


export type CreateDeliveryInput = TypeOf<typeof createDeliverySchema>
export type DeliveryInput = TypeOf<typeof deliverySchema>

