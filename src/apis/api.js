import axios from 'axios'

const URL = "https://blogbackend6.herokuapp.com"
export const createPost = async(input)=>{
    try {   
        return await axios.post(`${URL}/create`, input)
    } catch (error) {
        console.log('500')
    }
}

export const getPosts = async (param)=>{
    try {
        let response = await axios.get(`${URL}/posts${param}`)
        return response.data
        
    } catch (error) {
        console.log('500')
    }
}
export const getPost = async (id)=>{
    try {
        let response = await axios.get(`${URL}/posts/${id}`) 
        return response.data
        
    } catch (error) {
        console.log('500')
    }
}




export const updatePost = async(id,input)=>{
    try {   
        return await axios.post(`${URL}/update/${id}`, input)
    } catch (error) {
        console.log('500')
    }
}
export const deletePost = async(id,input)=>{
    try {   
        return await axios.delete(`${URL}/delete/${id}`)
    } catch (error) {
        console.log('500')
    }
}




// upload file


export const uploadFile = async(input)=>{
    try {   
        return await axios.post(`${URL}/file/upload`, input)
    } catch (error) {
        console.log('500')
    }
}



// comment


export const comments = async (input)=>{
    try {
      return await axios.post(`${URL}/comments`, input)
        
    } catch (error) {
        console.log('500')
    }
}
export const getComments = async (id)=>{
    try {
      let response = await axios.get(`${URL}/comments/${id}`)
      return response.data
        
    } catch (error) {
        console.log('500')
    }
}
export const deleteComment = async (id)=>{
    try {
      return await axios.delete(`${URL}/comments/delete/${id}`)
        
    } catch (error) {
        console.log('500')
    }
}