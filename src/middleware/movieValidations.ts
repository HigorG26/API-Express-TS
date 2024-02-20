import { verify } from "crypto";
import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString().withMessage("Título não pode ser vazio.")
            .isLength({min: 3}).withMessage("O título deve ter 3 caracteres no mínimo."),
        body("rating")
            .isNumeric().withMessage("A nota precisa ser um número!")
            .custom((value: number) => {
                if (value < 0 || value > 10) 
                    throw new Error("A nota precisa estar entre 0 e 10.")
            }),
        body("description")
            .isString().withMessage("A descrição é obrigatória!"),
        body("director")
            .isString().withMessage("O nome do diretor é obrigatório!"),
        body("poster")
            .isURL().withMessage("A imagem precisa estar em formato de URL!"),
            
    ]
}