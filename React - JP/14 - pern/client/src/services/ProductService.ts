import { draftProductSchema, ProductsSchema } from "../types"
import axios from "axios";
import { safeParse } from "valibot"

type ProductData = {
    [k: string]: FormDataEntryValue;
}


export async function addProduct(data: ProductData) {
    try {

        const result = safeParse(draftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if (result.success) {

            const url = `${import.meta.env.VITE_API_URL}/api/products`

            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })



        } else {
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)

    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios(url)
        const result = safeParse(ProductsSchema, data.data)
        if (result.success) {
            return result.output
        } else {
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)

    }
}