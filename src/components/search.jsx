import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export const SearchBar = ({ setSearchVal }) => {
    const [inputVal, setInputVal] = useState('')

    return (
        <form 
            className="group sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-24 shadow-md mb-8"
            onSubmit={(ev) => {
                ev.preventDefault()
                setSearchVal(inputVal)
            }}
        >
            <div className="flex max-w-xl mx-auto py-3">
                <span className="pr-3 flex items-center">
                    <button type="submit">
                        <SearchIcon className="h-5 w-5 transform hover:scale-110 hover:border hover:rounded-md" />
                    </button>
                </span>
                <input 
                    type="text" 
                    value={inputVal}
                    placeholder='search games...'
                    className="text-gray-800 cursor-text w-1/2 py-1 focus:outline-none transform focus:translate-x-2"
                    onChange={(ev) => setInputVal(ev.target.value)}
                />
            </div>
        </form>
    )
}