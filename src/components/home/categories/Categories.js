import React from 'react'
import { Link } from 'react-router-dom'
import {
    ChartBarIcon,
    RefreshIcon,

} from '@heroicons/react/outline'
import CategoriesBody from './CategoriesBody'



function Categories() {
    return (
        <>



            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden w-[20vw] mt-2">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link to="/create">
                        <button className="uppercase px-12 py-2 bg-blue-500 outline-hidden mx-auto text-white -mt-5 rounded-md">
                            Create Blog
                        </button>
                    </Link>
                    <Link to={`/`} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 border-b-2 border-gray-300" >
                        <ChartBarIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">All categories</p>
                        </div>
                    </Link>
                    <CategoriesBody Icon={RefreshIcon} Title={"Music"} />
                    <CategoriesBody Icon={RefreshIcon} Title={"Movies"} />
                    <CategoriesBody Icon={RefreshIcon} Title={"Sports"} />
                    <CategoriesBody Icon={RefreshIcon} Title={"Tech"} />
                    <CategoriesBody Icon={RefreshIcon} Title={"Fashion"} />
                </div>
            </div>
        </>

    )
}

export default Categories
