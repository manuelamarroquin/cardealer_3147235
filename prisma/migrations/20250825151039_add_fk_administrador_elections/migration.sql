/*
  Warnings:

  - Added the required column `admin_id` to the `elections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `elections` ADD COLUMN `admin_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `elections` ADD CONSTRAINT `elections_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `administrador`(`id_admin`) ON DELETE RESTRICT ON UPDATE CASCADE;
