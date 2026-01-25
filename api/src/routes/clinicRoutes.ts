import { Router } from 'express';
import clinicController from '../controllers/clinicController';
import validators from '../validators/clinicValidators';
import validate from '../middlewares/validate';

const router = Router();

router.post(
  '/:id/join',
  validate(validators.joinClinicQueue),
  clinicController.joinClinicQueue,
);

export default router;
