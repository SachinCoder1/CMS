import React from 'react'
import HomeBlogs from './blogs/HomeBlogs'
import Categories from './categories/Categories'
import TopBanner from './TopBanner'

function Home() {
    return (
        // <div className='w-[100vw]'>
        <>
            <TopBanner />
            <div className="flex flex-row mt-2">
                <Categories />
                <HomeBlogs />
                {/* </div> */}
            </div>
        </>
    )
}

export default Home
