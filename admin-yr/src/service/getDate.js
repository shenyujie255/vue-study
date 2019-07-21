import { get,post } from "./axios";

export const itemDate = () => get('/api/item',{
    type: 'items'
})