const Router = require('express');
const router = Router();
const booksRouter = require('./booksroute');
const authorsRouter = require('./authorroute');
const genresRouter = require('./genreroute');
const getAllCount = require('../utils/getAllCount');
router.get('/',getAllCount)
router.use('/books',booksRouter)
router.use('/authors',authorsRouter)
router.use('/genres',genresRouter)

module.exports = router;