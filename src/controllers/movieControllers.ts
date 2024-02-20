import { NextFunction, Request, Response } from "express"; 

//Model
import { MovieModel } from "../models/Movie"; 

//Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Algo deu errado: ${e.message}`)
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if (!movie) {
            return res.status(404).json({ error: "Filme não encontrado." })
        }

        return res.status(200).json(movie)

    } catch (e: any) {
        Logger.error(`Algo deu errado: ${e.message}`)
    }
};

export async function findAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find()
        return res.status(200).json(movies)

    } catch (e: any) {
        Logger.error(`Algo deu errado: ${e.message}`)
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findByIdAndDelete(id)

        if(!movie) 
            return res.status(404).json({ error: "FIlme não encontrado ou já excluído." })

        return res.status(200).json( "Filme excluído com êxito!" )

    } catch (e: any) {
        Logger.error(`Algo deu errado: ${e.message}`)
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const id = req.params.id
        const data = req.body;
        const movie = await MovieModel.findById(id)

        if (!movie) {
            return res.status(404).json({ error: "Filme não encontrado." })
        }

        await MovieModel.updateOne({ _id: id }, data)
        return res.status(200).json(data)


    } catch (e: any) {
        Logger.error(`Algo deu errado: ${e.message}`)
    }
}