/*
  Warnings:

  - You are about to drop the `UserTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "UserTask_referenceExternalId_key";

-- DropIndex
DROP INDEX "UserTask_uuid_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserTask";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "referenceExternalId" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("createdAt", "id", "name", "ownerId", "updateAt", "uuid") SELECT "createdAt", "id", "name", "ownerId", "updateAt", "uuid" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_uuid_key" ON "Project"("uuid");
CREATE TABLE "new_ProjectParticipant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProjectParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectParticipant_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProjectParticipant" ("createdAt", "id", "projectId", "userId") SELECT "createdAt", "id", "projectId", "userId" FROM "ProjectParticipant";
DROP TABLE "ProjectParticipant";
ALTER TABLE "new_ProjectParticipant" RENAME TO "ProjectParticipant";
CREATE UNIQUE INDEX "ProjectParticipant_userId_projectId_key" ON "ProjectParticipant"("userId", "projectId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_referenceExternalId_key" ON "User"("referenceExternalId");
