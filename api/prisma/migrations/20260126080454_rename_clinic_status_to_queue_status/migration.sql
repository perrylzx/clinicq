/*
  Warnings:

  - You are about to drop the column `status` on the `Clinic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Clinic" DROP COLUMN "status",
ADD COLUMN     "queueStatus" TEXT NOT NULL DEFAULT 'Closed';
