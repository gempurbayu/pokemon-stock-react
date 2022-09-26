import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackIcon from '../assets/icons/back.svg'
import CancelIcon from '../assets/icons/cancel.svg'

interface HeaderProps {
    title: any,
    icon: any
}

const Header = (props : HeaderProps) => {

    const { title, icon } = props;
    const navigate = useNavigate();

  return (
    <div className='flex flex-row h-14 shadow-md font-rubik not-italic'>
        <div className='back w-2/12 my-auto justify-start text-start ml-1.5'>
            {icon === 'back' ? <Link to={'/'}><img src={BackIcon} width='40' height='40' alt='backicon'/></Link> : <img src={CancelIcon} width='40' height='40' alt='cancelicon' onClick={() => navigate(-1)}/>}
            
        </div>
        <div className='Title w-8/12 text-center my-auto'>
            <h3 className='text-md font-bold text-basecolor capitalize'>{title}</h3>
        </div>
    </div>
  )
}

export default Header