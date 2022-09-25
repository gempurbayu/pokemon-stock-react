import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../assets/icons/back.svg'

const Header = () => {
  return (
    <div className='flex flex-row h-14 shadow-md font-rubik not-italic'>
        <div className='back w-2/12 my-auto justify-start text-start ml-1.5'>
            <Link to={'/'}><img src={BackIcon} width='40' height='40' alt='backicon'/></Link>
        </div>
        <div className='Title w-8/12 text-center my-auto'>
            <h3 className='text-md font-bold text-basecolor'>Stok Pokémon</h3>
        </div>
    </div>
  )
}

export default Header