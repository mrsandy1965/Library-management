-- CreateTable
CREATE TABLE `Book` (
    `bookid` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NOT NULL,
    `ISBN` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`bookid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `genreid` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`genreid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `authorid` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `familyName` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `date_of_death` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,
    `lifeSpan` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`authorid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
