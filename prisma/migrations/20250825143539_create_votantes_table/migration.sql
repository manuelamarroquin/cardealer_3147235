-- CreateTable
CREATE TABLE `voters` (
    `id_voter` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_voter` VARCHAR(30) NOT NULL,
    `apellido_voter` VARCHAR(30) NOT NULL,
    `tipo_doc_voter` VARCHAR(50) NOT NULL,
    `num_doc_voter` INTEGER NOT NULL,
    `correo_voter` VARCHAR(50) NOT NULL,
    `estado_voter` VARCHAR(30) NOT NULL,
    `contrasena_voter` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_voter`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
