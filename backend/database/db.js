import mongoose from 'mongoose'
import env from 'dotenv'
env.config()
const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0bwxa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`


const connectToMongo = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('mongo db connected successfully')
    } catch (error) {
        console.log('there is error while connection to mongo', error)
    }
}

export default connectToMongo  
