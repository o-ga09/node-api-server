/*
  Warnings:

  - You are about to drop the column `desc` on the `DriverTask` table. All the data in the column will be lost.
  - Added the required column `description` to the `DriverTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DriverTask` DROP COLUMN `desc`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
