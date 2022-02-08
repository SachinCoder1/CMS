import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import { getPost, deletePost } from '../../apis/api'

import bgImage from '../../TopBgImage.jpg'
import Comments from '../comments/Comments';
import Loader from '../Loader';

function ReadPost() {
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const [blog, setblog] = useState([])

    useEffect(() => {
        setloading(true)
        const get = async () => {
            const post = await getPost(id)
            setblog(post)
        }
        get()
        setloading(false)
    }, [])


    const HandleDelete = async () => {
        await deletePost(id)
        navigate('/')
    }

    return (
        <div>
        {loading && <Loader />}
            <div className="h-[50vh]">
                <img src={blog.image || bgImage} className="object-cover h-[50vh] w-full" alt="Blog image" />
            </div>
            <div className="flex justify-end px-[30px] pt-[10px] text-[30px]">
                <Link to={`/update/${id}`}>
                    <button className="text-blue-600 px-1 rounded-[10px] py-1">
                        <HiPencilAlt />
                    </button>
                </Link>
                {/* <Link> */}
                <button className="text-red-700 px-1 rounded-[10px] py-1" onClick={() => HandleDelete()}>
                    <HiOutlineTrash />
                </button>
                {/* </Link> */}
            </div>
            <div className="text-center p-2">
                <h1 className="text-gray-900 text-[30px]"> {blog.title} </h1>
            </div>

            <div className='flex justify-between px-5 pb-2 text-[rgba(0,0,0,0.6)]'>
                <p>Author: <Link to={`/?author=${blog.author}`}>  {blog.author} </Link>  </p>
                <p>{new Date(blog.date).toDateString()}</p>
            </div>
            <div className='px-[40px] py-2 text-[18px] leading-relaxed tracking-wider'>
                <p>
                    {blog.description}
                </p>
            </div>
            <div>
                <Comments post={blog} />
            </div>
        </div>
    )
}

export default ReadPost
