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
    const { params, body } = res.locals.data;
    const result = await clinicService.joinClinicQueue(params.id, body);
    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
}

export async function createClinic(
  req: Request,
  res: Response<unknown, { data: ReturnType<typeof validators.createClinic> }>,
  next: NextFunction,
) {
  try {
    const { body } = res.locals.data;
    const result = await clinicService.createClinic(
      body.specialty,
      body.name,
      body.location,
    );
    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
}

export async function viewClinicQueue(
  req: Request,
  res: Response<
    unknown,
    { data: ReturnType<typeof validators.viewClinicQueue> }
  >,
  next: NextFunction,
) {
  try {
    const { params } = res.locals.data;
    const result = await clinicService.viewClinicQueue(params.id);
    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
}
export async function updateClinicQueueStatus(
  req: Request,
  res: Response<
    unknown,
    { data: ReturnType<typeof validators.updateClinicQueueStatus> }
  >,
  next: NextFunction,
) {
  try {
    const { params } = res.locals.data;
    const result = await clinicService.updateClinicQueueStatus(
      params.id,
      params.status,
    );
    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
}
export default {
  joinClinicQueue,
  createClinic,
  viewClinicQueue,
  updateClinicQueueStatus,
};
