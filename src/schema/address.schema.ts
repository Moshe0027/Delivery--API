import { object, string, TypeOf } from 'zod';

const searchTerm= {
    body: object({
        searchTerm: string({
            required_error: 'SearchTerm is required'
        })
    })
}

export const searchTermSchema= object({
    ...searchTerm
})

export type SearchTermInput = TypeOf<typeof searchTermSchema>
