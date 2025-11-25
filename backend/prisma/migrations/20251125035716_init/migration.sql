/*
  Warnings:

  - You are about to drop the column `genreid` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_genreid_fkey`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `genreid`;

-- CreateTable
CREATE TABLE `BookGenre` (
    `bookid` INTEGER NOT NULL,
    `genreid` INTEGER NOT NULL,

    PRIMARY KEY (`bookid`, `genreid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BookGenre` ADD CONSTRAINT `BookGenre_bookid_fkey` FOREIGN KEY (`bookid`) REFERENCES `Book`(`bookid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookGenre` ADD CONSTRAINT `BookGenre_genreid_fkey` FOREIGN KEY (`genreid`) REFERENCES `Genre`(`genreid`) ON DELETE RESTRICT ON UPDATE CASCADE;
