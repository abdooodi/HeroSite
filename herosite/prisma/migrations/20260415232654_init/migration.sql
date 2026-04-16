-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "realname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "alignment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Alias" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "personId" INTEGER NOT NULL,
    CONSTRAINT "Alias_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Power" (
    "name" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterPowers" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CharacterPowers_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterPowers_B_fkey" FOREIGN KEY ("B") REFERENCES "Power" ("name") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CharacterTeams" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CharacterTeams_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterTeams_B_fkey" FOREIGN KEY ("B") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterPowers_AB_unique" ON "_CharacterPowers"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterPowers_B_index" ON "_CharacterPowers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterTeams_AB_unique" ON "_CharacterTeams"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterTeams_B_index" ON "_CharacterTeams"("B");
