import { InputJsonValue } from '@prisma/client/runtime/client';
import { prisma } from '../lib/prisma';

async function joinClinicQueue(
  clinicId: number,
  patientFields: InputJsonValue,
) {
  return prisma.queueEntry.create({ data: { clinicId, patientFields } });
}
async function createClinic(specialty: string, name: string, location: string) {
  return prisma.clinic.create({ data: { specialty, name, location } });
}
async function viewClinicQueue(clinicId: number) {
  return prisma.queueEntry.findMany({
    where: { clinicId },
    orderBy: { createdAt: 'asc' },
  });
}
async function updateClinicQueueStatus(clinicId: number, queueStatus: string) {
  return prisma.clinic.update({
    where: { id: clinicId },
    data: { queueStatus },
  });
}

export default {
  joinClinicQueue,
  createClinic,
  viewClinicQueue,
  updateClinicQueueStatus,
};
