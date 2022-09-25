import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import UpdateStokModal from '../../components/UpdateStokModal';

const DetailPokemon = () => {
    let { id } = useParams();
    
    let [open, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }

  return (
    <div className=''>
        <Header/>
        <div className='w-full h-full px-[4%]'>
            {/* Title Page */}
            <div className='section2 w-full mt-6 flex flex-col font-rubik h-140 py-4'>
                <h1 className='text-[28px] font-bold mb-6 text-basecolor'>Pikachu</h1>
                <button className='border-gray-200 border-2 rounded-[4px] py-0.5 text-sm w-[105px] h-10 font-bold text-inti bg-gray-100 shadow-sm'
                        onClick={handleModal}
                >Update Stok</button>
            </div>
            <div className='stok-info flex flex-col w-full text-start mt-4 mb-[40px]'>
                <p className='text-sm'>Sisa stok</p>
                <p className='text-3xl'>10 pcs</p>
            </div>
            <div className='riwayat w-full text-start flex flex-col'>
                <div className='mb-4'>
                    <p className='text-[16px] text-basecolor font-bold'>Riwayat stok</p>
                    <p className='text-sm text-basecolor '>Satuan stok dalam pcs</p>
                </div>
                <div className='w-full'>
                    <table className='w-full'>
                        <tr className='w-full font-bold text-basecolor h-12 border-b-2 border-gray-500'>
                            <td className='w-6/12'>2 Apr 2021</td>
                            <td className='w-3/12 text-right'>Jmlh</td>
                            <td className='w-3/12 text-right'>Stok</td>
                        </tr>
                        <tr className='w-full text-basecolor h-[88px] my-auto border-b-2'>
                            <td className='w-6/12'>
                                <div className='desc w-full flex flex-col'>
                                    <span className='text-[12px] font-bold'>08:00</span>
                                    <span className='text-sm font-bold text-inti'>Update stok</span>
                                    <span className='text-[12px]'>"Stok awal"</span>
                                </div>
                            </td>
                            <td className='w-3/12 text-right text-inti text-sm'>+10</td>
                            <td className='w-3/12 text-right font-bold text-basecolor'>{id}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <UpdateStokModal open={open} close={closeModal}/>
       
    </div>
  )
}

export default DetailPokemon