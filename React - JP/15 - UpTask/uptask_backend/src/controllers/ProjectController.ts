import { Request, Response } from "express"
import Project from "../models/Project"

export class ProjectController {

    static createProject = async (req: Request, res: Response) => {
        
        const project = new Project(req.body)
                
        project.manager = req.user.id

        try {

            await project.save()

            res.send('Proyecto creado Correctamente')
        } catch (error) {
            res.status(500).json({ error: "Hubo un error" });

        }
    }

    static getAllProjects = async (req: Request, res: Response) => {

        try {

            const project = await Project.find({
                $or:[
                    {
                        manager:{$in:req.user.id}
                    },
                    {
                        team:{$in:req.user.id}
                    }
                ]
            })
            res.json(project)
        } catch (error) {
            res.status(500).json({ error: "Hubo un error" });
        }

    }

    static getProjectById = async (req: Request, res: Response) => {

        const { id } = req.params
        try {
            const project = await Project.findById(id).populate('tasks')
            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }

            if(project.manager.toString() !== req.user.id.toString() && !project.team.includes(req.user.id)){
                const error = new Error('Accion no valida')
                return res.status(404).json({ error: error.message })
            }
            res.json(project)
        } catch (error) {
            res.status(500).json({ error: "Hubo un error" });
        }

    }

    static updateProject = async (req: Request, res: Response) => {


        try {

            req.project.clientName = req.body.clientName
            req.project.projectName = req.body.projectName
            req.project.description = req.body.description

            await req.project.save()

            res.json('Proyecto Actualizado!')
        } catch (error) {
            res.status(500).json({ error: "Hubo un error" });
        }

    }

    static deleteProject = async (req: Request, res: Response) => {

        try {

            await req.project.deleteOne()

            res.send("Proyecto Eliminado!")
        } catch (error) {
            res.status(500).json({ error: "Hubo un error" });
        }

    }



}