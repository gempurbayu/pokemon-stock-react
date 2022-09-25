/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store';
import { setDataPokemon } from '../store/actions';


const ListPokemonTable = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setDataPokemon() as any);
      },[]);
    
    let pokemons = useSelector((state: RootState)=> state.pokemons.pokemon);

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
                {pokemons.map((item:any) => 
                    <tr className='h-12 border-b-slate-200 border-b-[1px]'>
                    <td className='text-start text-inti font-bold'>{item.name}</td>
                    <td className='text-end font-bold'>{item.stock}</td>
                    </tr>
                )}
            </tbody>
            </table>
    </div>
  )
}

export default ListPokemonTable