import { Request,Response } from "express"
import { check,validationResult } from "express-validator"
import Product from "../models/Product.model"

export const createProduct = async (req:Request,res:Response)=>{

    try {
        const product = new Product(req.body)
        product.save()   
        res.status(201).json({data:product})
    } catch (error) {
        console.log(error)
        
    }

}


export const getProducts = async(req:Request,res:Response)=>{

    try {
        const products = await Product.findAll({
            order:[
                ['id','DESC']
            ],
            attributes:{exclude:['createdAt','updatedAt','availabitily']}
        })
        res.json({data:products})
    } catch (error) {

        console.log(error)
        
    }

}

export const getProductById = async(req:Request,res:Response) =>{

    try {

        const {id} = req.params

        const product = await Product.findByPk(id)

        if(!product){
            return res.status(404).json({
                error:"producto no encontrado"
            })
        }

        res.json({data:product})
        
    } catch (error) {
        console.log(error)
        
    }

}

export const updateProduct = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params

        const product = await Product.findByPk(id)

        if(!product){
            return res.status(404).json({
                error:"producto no encontrado"
            })
        }
        //Actualizar
        await product.update(req.body)
        await product.save()
        res.json({data:product})
        
    } catch (error) {

        console.log(error)       
    }

}

export const updateAvailability = async(req:Request,res:Response)=>{

    try {
        const {id} = req.params

        const product = await Product.findByPk(id)

        if(!product){
            return res.status(404).json({
                error:"producto no encontrado"
            })
        }

        //Actualizar

        product.availabitily = !product.dataValues.availabitily
        await product.save()


        res.json({data:product})
        
    } catch (error) {
        
        console.log(error)       
    }

}

export const deleteProduct = async(req:Request,res:Response)=>{
    const {id} = req.params

    const product = await Product.findByPk(id)

    if(!product){
        return res.status(404).json({
            error:"producto no encontrado"
        })
    }

    await product.destroy()

    res.json({data:"producto eliminado"})




}