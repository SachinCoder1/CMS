import React from 'react'

function HomeBlogsBody({title, category, author, description, image}) {
    return (
        <div className="border-[1px] border-gray-300 rounded w-[250px] cursor-pointer hover:scale-105 transition-all">
            <div className="flex flex-col justify-center items-center">
                <img src={image || "./images/TopBgImage.jpg"} className="object-cover" alt="" />
                <p className="text-[rgba(0,0,0,0.5)]">{category}</p>
                <h2 className="text-[20px] font-bold">{title}</h2>
                <p className="text-[rgba(0,0,0,0.5)]">{author}</p>
            </div>
            <p className="p-2">{description}</p>
        </div>
    )
}

export default HomeBlogsBody
