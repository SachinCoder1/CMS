import React, { useState, useEffect } from 'react'
import HomeBlogsBody from './HomeBlogsBody'
import { getPosts } from '../../../apis/api'
import { Link, useLocation } from 'react-router-dom'
import Loader from '../../Loader'

function HomeBlogs() {
    const {search} = useLocation();
    const [loading, setloading] = useState(false)
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        setloading(true)
        const get = async () => {
            let posts = await getPosts(search)
            setblogs(posts)
        }

        get()
        setloading(false)
    }, [search])
    return (
        <div className="grid grid-cols-4 gap-4 border-1 border-gray-300 p-3">
        {loading && <Loader />}
            {

                blogs && blogs.map((blog) => {
                    return (
                        <Link to={`/details/${blog._id}`} key={blog._id}>
                            <HomeBlogsBody title={blog.title.slice(0, 30)} category={blog.category} author={blog.author} description={blog.description.slice(0, 165)} image={blog.image}/>
                        </Link>
                    )

                })
            }


        </div>
    )
}

export default HomeBlogs
