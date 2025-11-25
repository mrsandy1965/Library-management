const Router = require('express');
const {getAllCount , getAllBooks , getBookById ,getAllAuthors , getAuthorbyId, getAllGenres, getGenreById, createBook} = require('../controllers/bookController');
const router = Router();


router.get('/',getAllCount)

router.post('/books/create',createBook)

router.get('/books',getAllBooks)
router.get('/book/:id',getBookById)

router.get('/authors',getAllAuthors)
router.get("/author/:id",getAuthorbyId)

router.get('/genres',getAllGenres)
router.get('/genre/:id',getGenreById)

module.exports = router;