import React from 'react'

const ListPokemonTable = () => {
  return (
    <div>
        <table className='table-auto mt-6 w-full font-nunito'>
            <thead>
                <tr className='h-12 border-b-slate-800 border-b-[1px]'>
                <th  className='text-start w-6/12'>Nama</th>
                <th  className='text-end  w-6/12'>Stok</th>
                </tr>
            </thead>
            <tbody>
                <tr className='h-12 border-b-slate-200 border-b-[1px]'>
                <td className='text-start text-inti font-bold'>Pikachu</td>
                <td className='text-end font-bold'>10</td>
                </tr>
            </tbody>
            </table>
    </div>
  )
}

export default ListPokemonTable