import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export const SearchBar = () => {
    const [searchVal, setSearchVal] = useState('')

    return (
        <form className="group sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-24 shadow-md mb-8">
            <div className="flex max-w-xl mx-auto py-3">
                <span className="pr-3 flex items-center">
                    <SearchIcon className="h-5 w-5" />
                </span>
                <input 
                    type="text" 
                    value={searchVal}
                    placeholder='search games...'
                    className="text-gray-800 cursor-text w-1/2 py-1 focus:outline-none transform focus:translate-x-2"
                    onChange={(ev) => setSearchVal(ev.target.value)}
                />
            </div>
        </form>
    )
}