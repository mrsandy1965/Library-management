const prisma = require('../db/db.config');

const createBook = async (req,res)=>{
    try{
        const {title , authorid , genre ,summary , isbn , url} = req.body;
        const newBook = await prisma.book.create({
            data:{ 
                title,
                authorid,
                summary,
                isbn,
                genre:{
                    create:genre.map((g)=>({
                        name : g.name , 
                        url : g.url
                    })
                ),
                },
                include:{
                    genre:true
                }
            }
        });
        res.status(201).json(newBook);
    }catch(error){
        console.error('Error creating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

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


const getAllBooks = async (req,res)=>{
    try{
        const books = await prisma.book.findMany();
        res.status(200).json(books);
    }catch(err){
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getBookById = async (req,res)=>{
    const {id} = req.params;
    try{
        const book = await prisma.book.findUnique({
            where:{
                bookid:parseInt(id)
            }
        });
        res.status(200).json(book);
    }catch(err){
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllAuthors = async (req,res)=>{
    try{
        const authors = await prisma.author.findMany();
        res.status(200).json(authors);
    }catch(err){
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAuthorbyId = async (req,res)=>{
    const {id} = req.params;
    try{
        const author = await prisma.author.findUnique({
            where:{
                authorid:parseInt(id)
            }
        });
        res.status(200).json(author);
    }catch(err){
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllGenres = async (req,res)=>{
    try{
        const genres = await prisma.genre.findMany();
        res.status(200).json(genres);
    }catch(err){
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getGenreById = async (req,res)=>{
    try{
        const {id} = req.params ;
        const genre = await prisma.genre.findUnique({
            where:{
                genreid:parseInt(id)
            }
        })
        res.status(200).json(genre);
    }catch(error){
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = {getAllCount,getAllBooks , getBookById , getAllAuthors , getAuthorbyId , getAllGenres , getGenreById , createBook};