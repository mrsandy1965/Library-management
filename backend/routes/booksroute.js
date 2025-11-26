const Router = require('express');
const {getAllCount , getAllBooks , getBookById , createBook, deleteBook, updateBook} = require('../controllers/bookController');
const booksRouter = Router();

booksRouter.get('/',getAllBooks)
booksRouter.post('/create',createBook)
booksRouter.get('/:id',getBookById)
booksRouter.delete('/delete/:id',deleteBook)
booksRouter.patch('/update/:id',updateBook)

module.exports = booksRouter;