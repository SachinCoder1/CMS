import React, { useState, useEffect } from 'react'
import bgImage from '../../TopBgImage.jpg'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { getPost, updatePost, uploadFile } from '../../apis/api';

import { HiPlusCircle } from "react-icons/hi";


function UpdatePost() {
    const navigate = useNavigate()
    const { id } = useParams()
    const initialValue = {
        title: "",
        image: "",
        description: "",
        category: "All",
        date: Date(),
    }

    const [allValue, setallValue] = useState(initialValue)
    const [imageFile, setImageFile] = useState("")
    useEffect(() => {
        const getFile = async () => {
              if(imageFile){
                  const data = new FormData()
                  data.append("name", imageFile.name);
                  data.append("file", imageFile)
  
                 const image= await uploadFile(data)
                 allValue.image = image.data
                 setImageFile(image.data)
              }
          }
          getFile()
      }, [imageFile])






    useEffect(() => {
        const get = async () => {
            const post = await getPost(id)
            setallValue(post)
        }
        get()
    }, [])


    const handleChange = (e) => {

        setallValue({ ...allValue, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        if (allValue.title && allValue.description) {
            updatePost(id, allValue)
            navigate(`/details/${id}`)
        }

    }


    return (
        <div>
            <div className='px-20'>
                <div className="h-[50vh]">
                    <img src={allValue.image || bgImage} className="object-cover h-[50vh] w-full" alt="" />
                </div>
                <div className='flex justify-between items-center py-2'>
                    <div className='flex flex-grow items-center'>
                        <span className='pr-3'>
                        <label htmlFor="imageFile">
                            <HiPlusCircle className="text-[30px] cursor-pointer" />

                        </label>
                        <input type="file" className="hidden" name="file" id="imageFile" onChange={(e) => setImageFile(e.target.files[0])} />
                        </span>
                        <input className='flex-grow outline-none text-[30px]' type="text" name="title" id="title" placeholder='Title' onChange={(e) => handleChange(e)} value={allValue.title} />
                    </div>
                    <div>
                        <button onClick={() => handleClick()} className='bg-blue-600 text-[19px] text-white px-2 py-1'>Update</button>
                    </div>

                </div>
                <div className='mt-5 px-3 text-[20px] leading-relaxed'>
                    <textarea className="outline-none bg-transparent w-full h-[100vh]" name="description" placeholder='Enter your blog' onChange={(e) => handleChange(e)} value={allValue.description}></textarea>
                </div>
            </div>
        </div>
    )
}

export default UpdatePost
