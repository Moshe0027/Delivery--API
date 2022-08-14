import { object, string, TypeOf } from 'zod';

const payload = {
    body: object({
        address: string({
            required_error: 'Address is required'
        }),     
    })
}


export const getTimeslotsSchema = object({
    ...payload
})


export type GetTimeslotsInput = TypeOf<typeof getTimeslotsSchema>

