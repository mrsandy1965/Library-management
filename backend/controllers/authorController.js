const prisma = require('../db/db.config');
const createAuthor = async (req,res)=>{
    const {firstName , familyName , date_of_birth , date_of_death , name , lifeSpan } = req.body;
    try{
        const newAuthor = await prisma.author.create({
            data:{firstName , familyName , date_of_birth , date_of_death , name , lifeSpan }
        });
        res.status(201).json(newAuthor);
    }catch(err){
        console.error('Error creating author:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateAuthor = async (req,res)=>{
    const {id} = req.params;
    const {firstName , familyName , date_of_birth , date_of_death , name , lifeSpan } = req.body;
    try{
        const updatedAuthor = await prisma.author.update({
            where:{authorid:parseInt(id)},
            data:{firstName , familyName , date_of_birth , date_of_death , name , lifeSpan }
        });
        res.status(200).json(updatedAuthor);
    }catch(err){
        console.error('Error updating author:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteAuthor = async (req,res)=>{
    const {id} = req.params;
    try{
        const deletedAuthor = await prisma.author.delete({
            where:{authorid:parseInt(id)}
        });
        res.status(200).json({ message: 'Author deleted successfully' });
    }catch(err){
        console.error('Error deleting author:', error);
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

module.exports = {getAllAuthors, getAuthorbyId, createAuthor, updateAuthor, deleteAuthor};