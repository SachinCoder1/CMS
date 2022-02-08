import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { HiPlusCircle } from "react-icons/hi";

import { createPost, uploadFile } from '../../apis/api'
import Loader from '../Loader'



function CreatePost() {
    const navigate = useNavigate()
    const initialValue = {
        title: "",
        image: "",
        description: "",
        category: "All",
        date: new Date(),
        author: "BlogAuthor"
    }
    const [allValue, setallValue] = useState(initialValue)
    const [imageFile, setImageFile] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {

        setIsLoaded(true)
        const getFile = async () => {
            if (imageFile) {
                const data = new FormData()
                data.append("name", imageFile.name);
                data.append("file", imageFile)

                const image = await uploadFile(data)
                allValue.image = image.data
                setImageFile(image.data)
            }
        }
        getFile()
        setIsLoaded(false)
    }, [imageFile])



    const handleChange = (e) => {
        setallValue({ ...allValue, [e.target.name]: e.target.value })
    }





    const handleClick = () => {
        if (allValue.title && allValue.description) {
            createPost(allValue)
          navigate('/')
        }

    }





    return (
        <div className='px-20'>
            <div className="h-[50vh]">
                {isLoaded ? <Loader /> : <img src={allValue.image || "./images/TopBgImage.jpg"} className="object-cover h-[50vh] w-full" alt="" />}
            </div>
            <div className='flex justify-between items-center py-2'>
                <div className='flex flex-grow items-center'>
                    <span className='pr-3'>
                        <label htmlFor="imageFile">
                            <HiPlusCircle className="text-[30px] cursor-pointer" />

                        </label>
                        <input type="file" className="hidden" name="file" id="imageFile" onChange={(e) => setImageFile(e.target.files[0])} />
                    </span>
                    <input className='flex-grow outline-none text-[30px]' type="text" name="title" id="title" placeholder='Title' onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <button className='bg-blue-600 text-[19px] text-white px-2 py-1' onClick={() => handleClick()}>Publish</button>
                </div>

            </div>
            <div className='mt-5 px-3 text-[20px] leading-relaxed h-full'>
                <textarea className="outline-none bg-transparent w-full h-[100vh]" name="description" placeholder='Enter your blog...' onChange={(e) => handleChange(e)}></textarea>
            </div>
        </div>
    )
}

export default CreatePost
