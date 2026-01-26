import { Request } from 'express';
import z from 'zod';

const getClinics = (req: Request) => {
  const querySchema = z.object({
    search: z.string().optional(),
    filters: z
      .object({
        specialty: z.string().optional(),
      })
      .optional()
      .default({}),
    page: z.coerce.number().optional(),
  });

  return {
    query: querySchema.parse(req.query),
  };
};

const joinClinicQueue = (req: Request) => {
  const paramSchema = z.object({
    id: z.coerce.number(),
  });
  const bodySchema = z.object({
    phoneNumber: z.number(),
    name: z.string(),
  });

  return {
    params: paramSchema.parse(req.params),
    body: bodySchema.parse(req.body),
  };
};

const createClinic = (req: Request) => {
  const bodySchema = z.object({
    name: z.string(),
    specialty: z.string(),
    location: z.string(),
  });

  return {
    body: bodySchema.parse(req.body),
  };
};

const viewClinicQueue = (req: Request) => {
  const paramSchema = z.object({
    id: z.coerce.number(),
  });

  return {
    params: paramSchema.parse(req.params),
  };
};

const updateClinicQueueStatus = (req: Request) => {
  const paramSchema = z.object({
    id: z.coerce.number(),
    status: z.string(),
  });

  return {
    params: paramSchema.parse(req.params),
  };
};

const updateClinicQueueEntryStatus = (req: Request) => {
  const paramSchema = z.object({
    id: z.coerce.number(),
    status: z.string(),
  });

  return {
    params: paramSchema.parse(req.params),
  };
};
const createClinicDoctor = (req: Request) => {
  const paramSchema = z.object({
    id: z.coerce.number(),
  });
  const bodySchema = z.object({
    bio: z.string(),
    name: z.string(),
    specialty: z.string(),
  });

  return {
    params: paramSchema.parse(req.params),
    body: bodySchema.parse(req.body),
  };
};
const updateClinicDoctor = (req: Request) => {
  const paramSchema = z.object({
    id: z.coerce.number(),
    doctorId: z.coerce.number(),
  });

  const bodySchema = z.object({
    bio: z.string().optional(),
    name: z.string().optional(),
    specialty: z.string().optional(),
  });

  return {
    params: paramSchema.parse(req.params),
    body: bodySchema.parse(req.body),
  };
};

export default {
  getClinics,
  joinClinicQueue,
  createClinic,
  viewClinicQueue,
  updateClinicQueueStatus,
  updateClinicQueueEntryStatus,
  createClinicDoctor,
  updateClinicDoctor,
};
