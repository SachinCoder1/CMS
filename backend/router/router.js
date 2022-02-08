import express from "express";
import { comments, deleteComments, getComments } from "../controller/comment-controller.js";
import { createPost, getPosts, getPost, updatePost, deletePost } from "../controller/create-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";


const Router = express.Router()

// crud router

Router.post('/create', createPost)
Router.get('/posts', getPosts)
Router.get('/posts/:id', getPost)
Router.post('/update/:id', updatePost)
Router.delete('/delete/:id', deletePost)


// image router

Router.post('/file/upload', upload.single('file'), uploadImage);
Router.get('/file/:filename', getImage);


// Comments router


Router.post('/comments', comments)
Router.get('/comments/:id', getComments)
Router.delete('/comments/delete/:id', deleteComments)


export default Router 