-- CreateTable
CREATE TABLE `career` (
    `id_career` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_career` VARCHAR(60) NOT NULL,
    `facultad_career` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`id_career`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
