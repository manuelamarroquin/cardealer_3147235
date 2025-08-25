-- CreateTable
CREATE TABLE `administrador` (
    `id_admin` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_admin` VARCHAR(30) NOT NULL,
    `apellido_admin` VARCHAR(30) NOT NULL,
    `tipo_doc_Admin` VARCHAR(50) NOT NULL,
    `num_doc_admin` INTEGER NOT NULL,
    `correo_admin` VARCHAR(50) NOT NULL,
    `contrasena_admin` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id_admin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
