import { object, number, string, TypeOf } from 'zod';

const payload = {
    body: object({
        address: string({
            required_error: 'Address is required'
        }),     
    })
}


export const createTimeslotsSchema = object({
    ...payload
})


export type CreateTimeslotsInput = TypeOf<typeof createTimeslotsSchema>

