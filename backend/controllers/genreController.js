const prisma = require('../db/db.config');
const createGenre = async (req,res)=>{
    try{
        const {name} = req.body;
        const newGenre = await prisma.genre.create({
            data:{name}
        });
        res.status(201).json(newGenre);
    }catch(error){
        console.error('Error creating genre:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateGenre = async (req,res)=>{
    try{
        const {id} = req.params;
        const {name} = req.body;
        const updatedGenre = await prisma.genre.update({
            where:{genreid:parseInt(id)},
            data:{name}
        });
        res.status(200).json(updatedGenre);
    }catch(error){
        console.error('Error updating genre:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteGenre = async (req,res)=>{
    try{
        const {id} = req.params;
        const deletedGenre = await prisma.genre.delete({
            where:{genreid:parseInt(id)}
        });
        res.status(200).json({ message: 'Genre deleted successfully' });
    }catch(error){
        console.error('Error deleting genre:', error);
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

module.exports = {getAllGenres, getGenreById, createGenre, updateGenre, deleteGenre};  