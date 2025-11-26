const prisma = require('../db/db.config');
const getAllCount = async (req, res) => {
    try {
        const bookCount = await prisma.book.count();
        const authorCount = await prisma.author.count();
        const genreCount = await prisma.genre.count();

        res.status(200).json({
            books: bookCount,
            authors: authorCount,
            genre: genreCount
        });
    } catch (error) {
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = getAllCount;