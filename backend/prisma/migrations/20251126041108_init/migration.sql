/*
  Warnings:

  - You are about to drop the column `url` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Genre` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Author` DROP COLUMN `url`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `url`;

-- AlterTable
ALTER TABLE `Genre` DROP COLUMN `url`;
