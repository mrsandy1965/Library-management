const Router = require('express');
const authorsRouter = Router();
const {getAllAuthors , getAuthorbyId, createAuthor, updateAuthor, deleteAuthor} = require('../controllers/authorController');

authorsRouter.get('/',getAllAuthors)
authorsRouter.get('/:id',getAuthorbyId)
authorsRouter.post('/create',createAuthor)
authorsRouter.patch('/update/:id',updateAuthor)
authorsRouter.delete('/delete/:id',deleteAuthor)

module.exports = authorsRouter;