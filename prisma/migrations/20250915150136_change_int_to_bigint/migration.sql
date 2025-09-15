-- CreateTable
CREATE TABLE "Administrador" (
    "id_admin" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_admin" TEXT NOT NULL,
    "apellido_admin" TEXT NOT NULL,
    "tipo_doc_admin" TEXT NOT NULL,
    "num_doc_admin" BIGINT NOT NULL,
    "correo_admin" TEXT NOT NULL,
    "contrasena_admin" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Voter" (
    "id_voter" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_voter" TEXT NOT NULL,
    "apellido_voter" TEXT NOT NULL,
    "tipo_doc_voter" TEXT NOT NULL,
    "num_doc_voter" BIGINT NOT NULL,
    "correo_voter" TEXT NOT NULL,
    "estado_voter" TEXT NOT NULL,
    "contrasena_voter" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "electionId" INTEGER NOT NULL,
    "careerId" INTEGER NOT NULL,
    CONSTRAINT "Voter_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id_role") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Voter_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election" ("id_election") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Voter_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career" ("id_career") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Election" (
    "id_election" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_election" TEXT NOT NULL,
    "fecha_inicio" DATETIME NOT NULL,
    "fecha_fin" DATETIME NOT NULL,
    "estado_election" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,
    CONSTRAINT "Election_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Administrador" ("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id_candidate" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_candidate" TEXT NOT NULL,
    "apellido_candidate" TEXT NOT NULL,
    "tipo_doc_candidate" TEXT NOT NULL,
    "num_doc_candidate" BIGINT NOT NULL,
    "correo_candidate" TEXT NOT NULL,
    "estado_candidate" TEXT NOT NULL,
    "foto_candidate" TEXT NOT NULL,
    "electionId" INTEGER NOT NULL,
    CONSTRAINT "Candidate_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election" ("id_election") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vote" (
    "id_vote" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha_vote" DATETIME NOT NULL,
    "hora_vote" DATETIME NOT NULL,
    "voterId" INTEGER NOT NULL,
    "candidateId" INTEGER,
    CONSTRAINT "Vote_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter" ("id_voter") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vote_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate" ("id_candidate") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id_proposal" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo_proposal" TEXT NOT NULL,
    "descripcion_proposal" TEXT NOT NULL,
    "estado_proposal" TEXT NOT NULL,
    "candidateId" INTEGER NOT NULL,
    CONSTRAINT "Proposal_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate" ("id_candidate") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Career" (
    "id_career" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_career" TEXT NOT NULL,
    "facultad_career" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Result" (
    "id_result" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_votes" INTEGER NOT NULL,
    "electionId" INTEGER NOT NULL,
    "candidateId" INTEGER NOT NULL,
    CONSTRAINT "Result_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election" ("id_election") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Result_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate" ("id_candidate") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id_role" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote_voterId_key" ON "Vote"("voterId");

-- CreateIndex
CREATE UNIQUE INDEX "Result_electionId_key" ON "Result"("electionId");

-- CreateIndex
CREATE UNIQUE INDEX "Result_candidateId_key" ON "Result"("candidateId");
