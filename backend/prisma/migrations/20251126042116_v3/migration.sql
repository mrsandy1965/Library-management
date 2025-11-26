-- CreateTable
CREATE TABLE `BookInstance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imprint` VARCHAR(191) NOT NULL,
    `due_back` DATETIME(3) NULL,
    `status` ENUM('AVAILABLE', 'RESERVED', 'LOANED', 'MAINTENANCE') NOT NULL DEFAULT 'AVAILABLE',
    `bookId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BookInstance` ADD CONSTRAINT `BookInstance_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`bookid`) ON DELETE RESTRICT ON UPDATE CASCADE;
