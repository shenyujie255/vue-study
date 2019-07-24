import { get,post } from "./axios";

export const itemDate = () => get('/api/item',{
    type: 'items'
})

export const tableDate = (query) => post('/table',{
    data: query
})