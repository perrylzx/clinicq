import { InputJsonValue } from '@prisma/client/runtime/client';
import { prisma } from '../lib/prisma';
import clinicValidators from '../validators/clinicValidators';

async function getClinics(
  search: string,
  page: number,
  filters: ReturnType<typeof clinicValidators.getClinics>['query']['filters'],
) {
  return prisma.clinic.findMany({
    include: { doctors: true },
    where: {
      ...filters,
      OR: [
        {
          name: { contains: search, mode: 'insensitive' },
        },
        {
          doctors: {
            some: {
              OR: [{ name: { contains: search, mode: 'insensitive' } }],
            },
          },
        },
      ],
    },
    take: 3,
    skip: page,
  });
}

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
async function updateClinicQueueEntryStatus(clinicId: number, status: string) {
  return prisma.queueEntry.update({
    where: { id: clinicId },
    data: { status: status },
  });
}
async function createClinicDoctor(
  clinicId: number,
  data: ReturnType<typeof clinicValidators.createClinicDoctor>['body'],
) {
  return prisma.doctor.create({
    data: { ...data, clinicId },
  });
}
async function updateClinicDoctor(
  doctorId: number,
  data: ReturnType<typeof clinicValidators.updateClinicDoctor>['body'],
) {
  return prisma.doctor.update({
    where: { id: doctorId },
    data,
  });
}

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
