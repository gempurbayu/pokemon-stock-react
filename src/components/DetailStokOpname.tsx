import React, { useState } from 'react'
import editIcon from '../assets/icons/edit.svg'
import UpdateStokModal from './UpdateStokModal'

interface DetailProps {
    data : any,
    prevstock : any,
    pokemonid : any
}

const DetailStokOpname = (props : DetailProps) => {
    const { data, prevstock, pokemonid } = props

    let [open, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }

  return (
    <div className='w-full'>
        <h3 className='font-bold text-[16px] mb-2'>Detail stok opname</h3>
        <table className='w-full'>
            <tr className='h-10 w-full text-sm'>
                <th className='w-6/12 text-start'>Keterangan</th>
                <th className='w-6/12 text-center'>Jumlah</th>
            </tr>
            <tr className='w-full border-y-2 border-slate-600 h-[68px]'>
                <td className='w-6/12'>
                    <p className='font-semibold text-inti text-sm'>Hasil update stok</p>
                    <p className='text-[12px]'>{data.pcs} pcs, {data.lusin} lusin (12s)</p>
                </td>
                <td className='w-full h-[65px] text-center text-sm flex flex-row justify-center items-center'>
                    <div className='w-6/12 text-end'>{data.total + prevstock} pcs</div>
                    <div className='w-3/12 pl-2'><img src={editIcon} alt="edit" onClick={handleModal}/></div>
                </td>
            </tr>
            <tr className='h-10 w-full text-sm'>
                <th className='w-6/12 text-start'>Total hasil stok opname</th>
                <th className='w-6/12 text-center'>{data.total + prevstock} pcs</th>
            </tr>
        </table>
        <UpdateStokModal open={open} close={closeModal} pokemonid={pokemonid}/>
    </div>
  )
}

export default DetailStokOpname