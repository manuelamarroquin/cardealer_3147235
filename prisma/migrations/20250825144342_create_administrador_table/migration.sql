/*
  Warnings:

  - You are about to drop the column `tipo_doc_Admin` on the `administrador` table. All the data in the column will be lost.
  - Added the required column `tipo_doc_admin` to the `administrador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `administrador` DROP COLUMN `tipo_doc_Admin`,
    ADD COLUMN `tipo_doc_admin` VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE `elections` (
    `id_election` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_election` VARCHAR(50) NOT NULL,
    `fecha_inicio` DATE NOT NULL,
    `fecha_fin` DATE NOT NULL,
    `estado_election` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_election`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
