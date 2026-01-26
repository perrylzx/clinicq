import { Router } from 'express';
import clinicController from '../controllers/clinicController';
import validators from '../validators/clinicValidators';
import validate from '../middlewares/validate';

const router = Router();

router.get('/', validate(validators.getClinics), clinicController.getClinics);

router.post(
  '/:id/join',
  validate(validators.joinClinicQueue),
  clinicController.joinClinicQueue,
);
router.post(
  '/',
  validate(validators.createClinic),
  clinicController.createClinic,
);

router.get(
  '/:id/queue',
  validate(validators.viewClinicQueue),
  clinicController.viewClinicQueue,
);

router.put(
  '/:id/status/:status',
  validate(validators.updateClinicQueueStatus),
  clinicController.updateClinicQueueStatus,
);

router.put(
  '/:id/queue_entry/:status',
  validate(validators.updateClinicQueueEntryStatus),
  clinicController.updateClinicQueueEntryStatus,
);
router.post(
  '/:id/doctor',
  validate(validators.createClinicDoctor),
  clinicController.createClinicDoctor,
);
router.put(
  '/:id/doctor/:doctorId',
  validate(validators.updateClinicDoctor),
  clinicController.updateClinicDoctor,
);

export default router;
