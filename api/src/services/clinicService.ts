import { InputJsonValue } from '@prisma/client/runtime/client';
import { prisma } from '../lib/prisma';

async function joinClinicQueue(
  clinicId: number,
  patientFields: InputJsonValue,
) {
  return prisma.queueEntry.create({ data: { clinicId, patientFields } });
}
async function createClinic(specialty: string, name: string) {
  return prisma.clinic.create({ data: { specialty, name } });
}
async function viewClinicQueue(clinicId: number) {
  return prisma.queueEntry.findMany({
    where: { clinicId },
    orderBy: { createdAt: 'asc' },
  });
}

export default { joinClinicQueue, createClinic, viewClinicQueue };
