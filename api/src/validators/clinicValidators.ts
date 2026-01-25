import { Request } from 'express';
import z from 'zod';

const validators = {
  joinClinicQueue: (req: Request) => {
    return {
      param: z
        .object({
          id: z.coerce.number(),
        })
        .parse(req.params),
      body: z
        .object({
          phoneNumber: z.number(),
          name: z.string(),
        })
        .parse(req.body),
    };
  },
};

export default validators;
