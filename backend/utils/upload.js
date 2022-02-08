import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import env from 'dotenv'
env.config()
const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0bwxa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const storage = new GridFsStorage({
    url: URL,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`; 

        return {
            bucketName: "photos", 
            filename: `${Date.now()}-blog-${file.originalname}`
        }  
    } 
});

export default multer({ storage }); 