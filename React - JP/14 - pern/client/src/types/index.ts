import { boolean, number, object, string, InferOutput, array } from "valibot";

export const draftProductSchema = object({
    name:string(),
    price:number()
})

export const ProductSchema = object({
    id:number(),
    name:string(),
    price:number(),
    availabitily:boolean()
})

export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>