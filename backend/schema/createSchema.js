import mongoose from 'mongoose'


const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: "All"

    },
    date: {

        type: Date,
        required: true

    },
    author:{
        type: String,
        required: true
    }
})

const Post = mongoose.model("blog", schema)

export default Post