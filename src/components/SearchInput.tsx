import React from 'react'

const SearchInput = () => {
  return (
    <div className='pt-12 text-left'>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="search" 
                type='text'
                name='search' 
                placeholder='Cari Pokemon'>
        </input>
    </div>
  )
}

export default SearchInput