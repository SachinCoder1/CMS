import commentModel from '../schema/commentSchema.js'


export const comments = async (req, res) => {
    try {
        let comment = await new commentModel(req.body)
        comment.save()
        console.log('comment added successfully')
        res.status(200).json(comment)

    } catch (error) {
        res.status(500).json(error)
    }
}
export const getComments = async (req, res) => {
    try {
        let comment = await commentModel.find({ postId: req.params.id })
        res.status(200).json(comment) 
    } catch (error) {
        res.status(500).json(error)
    }
} 

export const deleteComments = async (req, res) => {
    try {
        let comment = await commentModel.findById(req.params.id)
       comment.delete()
       res.status(200).json('comment deleted successfully')
       console.log("comment deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
} 