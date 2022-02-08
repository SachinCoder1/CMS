import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'https://blogbackend6.herokuapp.com';


let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo); 
    gfs.collection('fs');
}); 
 

export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);     
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json(error);
        console.log('you are in catch', error)
    }
}