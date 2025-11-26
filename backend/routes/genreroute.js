const Router = require('express');
const genresRouter = Router();
const {getAllGenres , getGenreById, createGenre, updateGenre, deleteGenre} = require('../controllers/genreController');

genresRouter.get('/',getAllGenres)
genresRouter.get('/:id',getGenreById)
genresRouter.post('/create',createGenre)
genresRouter.patch('/update/:id',updateGenre)
genresRouter.delete('/delete/:id',deleteGenre)

module.exports = genresRouter;