import { Request, Response, NextFunction } from 'express';

const validate = (
  validatorFunc: (req: Request, res: Response, next: NextFunction) => unknown,
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    res.locals.data = validatorFunc(req, res, next);
    next();
  };
};

export default validate;
