import React from 'react'

interface HistoryProps {
    data : any
}

const HistoryStock = (props : HistoryProps) => {

  const { data } = props;
  let tgl = new Date(data.date)
    console.log(tgl.toDateString());

  return (
    <div className='riwayat w-full text-start flex flex-col'>
        <div className='mb-4'>
            <p className='text-[16px] text-basecolor font-bold'>Riwayat stok</p>
            <p className='text-sm text-basecolor '>Satuan stok dalam pcs</p>
        </div>
        <div className='w-full'>
            <table className='w-full'>
                <tr className='w-full font-bold text-basecolor h-12 border-b-2 border-gray-500'>
                    <td className='w-6/12'>{tgl.toDateString()}</td>
                    <td className='w-3/12 text-right'>Jmlh</td>
                    <td className='w-3/12 text-right'>Stok</td>
                </tr>
                <tr className='w-full text-basecolor h-[88px] my-auto border-b-2'>
                    <td className='w-6/12'>
                        <div className='desc w-full flex flex-col'>
                            <span className='text-[12px] font-bold'>{tgl.getHours() + ':' + tgl.getMinutes()}</span>
                            <span className='text-sm font-bold text-inti'>{data.action}</span>
                            <span className='text-[12px]'>"{data.description}"</span>
                        </div>
                    </td>
                    <td className='w-3/12 text-right text-inti text-sm'>+{data.prevStock}</td>
                    <td className='w-3/12 text-right font-bold text-basecolor'>{data.total}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default HistoryStock