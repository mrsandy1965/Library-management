/*
  Warnings:

  - You are about to drop the `BookGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `BookGenre` DROP FOREIGN KEY `BookGenre_bookid_fkey`;

-- DropForeignKey
ALTER TABLE `BookGenre` DROP FOREIGN KEY `BookGenre_genreid_fkey`;

-- DropTable
DROP TABLE `BookGenre`;

-- CreateTable
CREATE TABLE `_BookGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BookGenre_AB_unique`(`A`, `B`),
    INDEX `_BookGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BookGenre` ADD CONSTRAINT `_BookGenre_A_fkey` FOREIGN KEY (`A`) REFERENCES `Book`(`bookid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BookGenre` ADD CONSTRAINT `_BookGenre_B_fkey` FOREIGN KEY (`B`) REFERENCES `Genre`(`genreid`) ON DELETE CASCADE ON UPDATE CASCADE;
