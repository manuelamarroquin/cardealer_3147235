-- CreateTable
CREATE TABLE `proposal` (
    `id_proposal` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo_proposal` VARCHAR(100) NOT NULL,
    `descripcion_proposal` VARCHAR(500) NOT NULL,
    `estado_proposal` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_proposal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
