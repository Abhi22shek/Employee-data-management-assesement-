import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = ({value,onchange}) => {
  return (
    <div className='relative  mt-4 '>
        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 size-5'/>
        <input 
        type="text"
        placeholder='Search by name, email or position'
        value={value}
        onChange={(e) => onchange(e.target.value)}
        className='w-full  placeholder:text-gray-700 text-black pl-10 pr-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-trasparent transition-colors'
        />
    </div>
  )
}

export default SearchBar