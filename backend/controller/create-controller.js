import Post from '../schema/createSchema.js'


export const createPost = async (req, res) => {

    try {
        const post = await new Post(req.body)
        post.save()
        console.log('post added to db successfully')
 
    } catch (error) {
        res.status(401).json(error)
        console.log('there is error in controller')
    }
}


export const getPosts = async (req, res) => {
    try {
        let author = req.query.author
        let category = req.query.category
        let allPosts;
        if(author){
            allPosts = await Post.find({author: author})
            
        }else if(category){
            allPosts = await Post.find({category: category})
            
        }else{
          allPosts = await Post.find({})

      } 


        res.status(200).json(allPosts)


    } catch (error) {
        console.log('there is error in getPost', error)
    }
}


export const getPost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)
        res.status(200).json(post)


    } catch (error) {
        console.log('there is error in getPost', error)
    }
}
export const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json("post updated successfyully")
        console.log('post updated successfully')
    } catch (error) {
        console.log('there is error in getPost', error)
    }
}


export const deletePost = async (req, res) => {
    try {
        const postDel = await Post.findByIdAndDelete(req.params.id)
        await postDel.delete()
        res.status(200).json('post deleted successfully')
    } catch (error) {
        console.log('there is error in deletePost', error)
    }

}