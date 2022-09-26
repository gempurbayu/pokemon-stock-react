import React from 'react'

interface DetailProps {
    data : any,
    prevstock : any
}

const DetailStokOpname = (props : DetailProps) => {
    const { data, prevstock } = props
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
                <td className='w-6/12 text-center text-sm'>{data.total + prevstock} pcs</td>
            </tr>
            <tr className='h-10 w-full text-sm'>
                <th className='w-6/12 text-start'>Total hasil stok opname</th>
                <th className='w-6/12 text-center'>{data.total + prevstock} pcs</th>
            </tr>
        </table>
    </div>
  )
}

export default DetailStokOpname