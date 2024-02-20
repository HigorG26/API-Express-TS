import { Request, Response, NextFunction } from "express"; 
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty())
        return next();
    
    const extractedErrors: object[] = [];

    errors.array().map(err => {  
        if (err.type === 'field') 
          extractedErrors.push({ [err.path]: err.msg })
      })

    return res.status(422).json({
        errors: extractedErrors,
    });
};
