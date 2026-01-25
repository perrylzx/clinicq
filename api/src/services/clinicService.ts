import { InputJsonValue } from '@prisma/client/runtime/client';
import { prisma } from '../lib/prisma';

async function joinClinicQueue(
  clinicId: number,
  patientFields: InputJsonValue,
) {
  return prisma.queueEntry.create({ data: { clinicId, patientFields } });
}

export default { joinClinicQueue };
