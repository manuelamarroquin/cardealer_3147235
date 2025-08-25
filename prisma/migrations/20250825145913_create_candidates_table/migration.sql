-- CreateTable
CREATE TABLE `candidates` (
    `id_candidate` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_candidate` VARCHAR(30) NOT NULL,
    `apellido_candidate` VARCHAR(30) NOT NULL,
    `tipo_doc_candidate` VARCHAR(50) NOT NULL,
    `num_doc_candidate` INTEGER NOT NULL,
    `correo_candidate` VARCHAR(50) NOT NULL,
    `estado_candidate` VARCHAR(30) NOT NULL,
    `foto_candidate` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_candidate`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
