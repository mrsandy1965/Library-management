const prisma = require('../db/db.config');

const createBook = async (req,res)=>{
    try{
        const {title , authorid , genre ,summary , isbn } = req.body;
        const newBook = await prisma.book.create({
            data:{ 
                title,
                authorid,
                summary,
                isbn,
                genre:{
                    connect:genre.map((g)=>({
                        genreid : g 
                    })
                ),
                }
            },
            include:{
                genre:true
            }
        });
        res.status(201).json(newBook);
    }catch(error){
        console.error('Error creating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateBook = async (req,res)=>{
    const {id} = req.params;
    const {title , authorid , genre ,summary , isbn } = req.body;
    try{
        const updatedBook = await prisma.book.update({
            where:{
                bookid:parseInt(id)
            },
            data:{
                title,
                authorid,
                summary,
                isbn,
                genre:{
                    connect:genre.map((g)=>({
                        genreid : g 
                    })
                ),
                } 
            }
        });
        res.status(200).json(updatedBook);
    }catch(error){
        console.error('Error updating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteBook = async (req,res)=>{
    const {id} = req.params;
    try{
        const deletedBook = await prisma.book.delete({
            where:{
                bookid:parseInt(id)
            }
        });
        res.status(200).json({ message: 'Book deleted successfully' });
    }catch(error){
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

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


module.exports = {getAllBooks , getBookById , createBook, deleteBook, updateBook};