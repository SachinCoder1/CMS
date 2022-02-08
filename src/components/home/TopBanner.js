import React from 'react'

function TopBanner() { 
    return (
        <div className=" mt-2 w-full h-[45vh] bg-back-image bg-center bg-no-repeat bg-cover">
            <div className="flex items-center justify-center h-[50vh] flex-col">
                <h2 className="text-blue-400 text-[60px] font-bold tracking-wider shadow-lg uppercase">Blog</h2>
                <p className="bg-white text-blue-300 px-2 py-1 font-semibold text-[20px] shadow-lg">A Blog Website</p>

            </div>
        </div>
    )
} 

export default TopBanner
