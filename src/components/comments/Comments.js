import React, { useState, useEffect } from 'react'
import { HiUserCircle } from "react-icons/hi";
import AllComment from './AllComment';
import { comments, getComments } from '../../apis/api'

function Comments({ post }) {
    const [whenTrue, setwhenTrue] = useState(false)
    const initialValue = {
        author: "",
        comment: "",
        date: new Date(),
        postId: ""
    }

    const [sendData, setsendData] = useState(initialValue)
    const [allComments, setallComments] = useState([])
    const handleChange = (e) => {
        setsendData({
            ...sendData,
            author: post.author,
            [e.target.name]: e.target.value,
            postId: post._id

        }) 
    }
    const handleClick = () => {
        comments(sendData)
        // setwhenTrue(Math.floor(Math.random() * 100))
        setwhenTrue(prev => !prev)
        setsendData({...sendData, comment:""})
    }
 
    useEffect(() => {
        const getcomments = async () => {
            let data = await getComments(post._id)
            setallComments(data)

        }
        getcomments()
    }, [post, whenTrue])



    return (
        <>
            <div className='flex px-[50px] my-4 items-center'>
                <div>
                    <HiUserCircle className='text-[30px]' />
                </div>
                <div className='flex flex-grow'>
                    <input value={sendData.comment} type="text" name='comment' onChange={(e) => handleChange(e)} placeholder='Enter comment' className='flex-grow outline-none mx-3 border-[1px] border-gray-200 rounded py-2 px-1' />
                </div>
                <div>
                    <button className='px-3 py-1 bg-blue-600 text-white' onClick={() => handleClick()}>
                        Post
                    </button>
                </div>
            </div>
            <hr />
            <div>
                {
                    allComments && allComments.map((atComment) => {
                        return (
                            <AllComment comment={atComment.comment} author={atComment.author} id={atComment._id} setwhenTrue={setwhenTrue}/>
                        )
                    })

                }
            </div>
        </>
    )
}

export default Comments
