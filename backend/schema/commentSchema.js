import mongoose from 'mongoose'


const schema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true 
 
    },
    postId: {
        type: String,
        required: true
    }
})

const commentModel = mongoose.model("comment", schema)

export default commentModel