import React from 'react'
import {Link} from 'react-router-dom'

function CategoriesBody({ Icon, Title }) {
    return (
        <>

            <Link to={`/?category=${Title}`} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 border-b-2 border-gray-300" >
                <Icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{Title}</p>
                </div>
            </Link>
            {/* <hr /> */}
        </>
    )
}

export default CategoriesBody
