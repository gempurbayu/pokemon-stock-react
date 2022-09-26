import React from 'react'
import Header from '../../components/Header'
import ArrowIcon from '../../assets/icons/back.svg'

const ConfirmationUpdate = () => {
  return (
    <div>
        <Header title='Pikachu' icon='cancel'/>
        <div className='w-full h-full px-[4%] font-rubik text-basecolor'>
            {/* Title Page */}
            <div className='section2 w-full mt-6 flex flex-col font-rubik h-140 py-4'>
                <h1 className='text-[28px] font-bold mb-6 text-basecolor capitalize'>Konfirmasi update stok</h1>
            </div>
            <div className='stok-info flex flex-col w-full text-start mt-4'>
                <p className='text-sm'>Selisih</p>
                <p className='text-3xl'>+533 pcs</p>
            </div>
            <div className='flex flex-row w-full justify-between mt-4 mb-10 py-auto'>
                <div className='w-6/12'>
                    <p className='text-sm'>Di sistem</p>
                    <p className='text-xl'>10 pcs</p>
                </div>
                <div className='w-2/12 text-end'>
                    <img src={ArrowIcon} alt='arrow' className='rotate-180'/>
                </div>
                <div className='w-5/12 text-start'>
                    
                    <p className='text-sm'>Hasil update stok</p>
                    <p className='text-xl'>543 pcs</p>
                </div>
            </div>
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
                           <p className='text-[12px]'>3 pcs, 45 lusin (12s)</p>
                        </td>
                        <td className='w-6/12 text-center text-sm'>543 pcs</td>
                    </tr>
                    <tr className='h-10 w-full text-sm'>
                        <th className='w-6/12 text-start'>Total hasil stok opname</th>
                        <th className='w-6/12 text-center'>543 pcs</th>
                    </tr>
                </table>
            </div>
            <div className='w-full'>
                <h3 className='font-bold text-[16px] mb-2 mt-4'>Catatan</h3>
                <textarea className='w-full h-20 px-2 py-1 border-2 shadow-inner border-slate-300 rounded-md'></textarea>
                <div className='w-full text-end mt-6'>
                    <button className='w-[80px] h-[40px] text-sm bg-inti text-white rounded-[4px]'>Simpan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationUpdate