import React from 'react'
import { deleteComment } from '../../apis/api'
import { HiUserCircle, HiTrash } from "react-icons/hi";



function AllComment({ comment, author, id, setwhenTrue }) {
    const handleClick = async () => {
        await deleteComment(id)
        setwhenTrue(prev => !prev)
    }


    return (
        <div className='flex justify-between px-[20px] py-2 mx-4 items-center border-[1px] bg-gray-100 rounded'>
            <div className='flex'>
                <HiUserCircle className='text-[50px]' />
                <div className='mx-5'>
                    <p className='text-gray-500'>{author}</p>
                    <p className='text-gray-800 flex-grow'>{comment}</p>
                </div>
            </div>

            <div>
                <HiTrash onClick={() => handleClick()} className='text-[30px] cursor-pointer hover:text-red-600' />
            </div>
        </div>
    )
}

export default AllComment
