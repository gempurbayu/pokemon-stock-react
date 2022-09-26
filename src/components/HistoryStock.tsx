import React from 'react'

interface HistoryProps {
    data : any
}

const HistoryStock = (props : HistoryProps) => {

  const { data } = props;
  let date:any = [];
  let history:any = [];
  
  if((date.length === 0)) {
    for(let i = 0; i < data.length; i++){
        if (!date.includes(data[i].date.substring(0, 15))) {
            date.push(data[i].date.substring(0, 15));
        }
    }    
  }

  if((history.length === 0)) {
    for(let i = 0; i < data.length; i++){
        history.push(data[i]);
    }    
  }

  console.log(date, history)

  return (
    <div className='riwayat w-full text-start flex flex-col font-rubik text-basecolor'>
        <div className='mb-4'>
            <p className='text-[16px] text-basecolor font-bold'>Riwayat stok</p>
            <p className='text-sm text-basecolor '>Satuan stok dalam pcs</p>
        </div>
        <div className='w-full'>
                {[...date].reverse().map((item:any, index:any) =>
                    <table key={index} className='w-full'>
                        <tr className='w-full font-bold text-basecolor h-12 border-b-2 border-gray-500'>
                            <th className='w-6/12 text-start'>{item}</th>
                            <th className='w-3/12 text-right'>Jmlh</th>
                            <th className='w-3/12 text-right'>Stok</th>
                        </tr>
                        {[...history].reverse().map((h: any, index:any) => 
                            <tr className='w-full text-basecolor h-[88px] my-auto border-b-2'>
                            <td className='w-6/12' key={index}>
                                <div className='desc w-full flex flex-col'>
                                    <span className='text-[12px] font-bold'>{h.date.substring(15, 21)}</span>
                                    <span className='text-sm font-bold text-inti'>{h.action}</span>
                                    <span className='text-[12px]'>"{h.description}"</span>
                                </div>
                            </td>
                            <td className='w-3/12 text-right text-inti text-sm'>+{h.total}</td>
                            <td className='w-3/12 text-right font-bold text-basecolor'>{h.total}</td>
                        </tr>
                        )}
                    </table>
                )}
        </div>
    </div>
  )
}

export default HistoryStock