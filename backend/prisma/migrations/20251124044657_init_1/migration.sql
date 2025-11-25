/*
  Warnings:

  - Added the required column `authorid` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genreid` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `authorid` INTEGER NOT NULL,
    ADD COLUMN `genreid` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorid_fkey` FOREIGN KEY (`authorid`) REFERENCES `Author`(`authorid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_genreid_fkey` FOREIGN KEY (`genreid`) REFERENCES `Genre`(`genreid`) ON DELETE RESTRICT ON UPDATE CASCADE;
