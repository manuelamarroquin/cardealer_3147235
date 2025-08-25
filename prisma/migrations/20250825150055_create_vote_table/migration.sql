-- CreateTable
CREATE TABLE `votes` (
    `id_vote` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_vote` DATE NOT NULL,
    `hora_vote` TIME NOT NULL,

    PRIMARY KEY (`id_vote`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
