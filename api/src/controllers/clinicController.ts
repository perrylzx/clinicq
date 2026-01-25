import { Request, Response, NextFunction } from 'express';
import clinicService from '../services/clinicService';
import validators from '../validators/clinicValidators';

export async function joinClinicQueue(
  req: Request,
  res: Response<
    unknown,
    { data: ReturnType<typeof validators.joinClinicQueue> }
  >,
  next: NextFunction,
) {
  try {
    const { param, body } = res.locals.data;
    const result = await clinicService.joinClinicQueue(param.id, body);
    res.send(201).json(result);
  } catch (e) {
    next(e);
  }
}
export default { joinClinicQueue };
