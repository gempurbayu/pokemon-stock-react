/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { setDataPokemon } from '../store/actions';


const ListPokemonTable = () => {

    const dispatch = useDispatch();
    let navigate =  useNavigate();

    let pokemons = useSelector((state: RootState)=> state.pokemons.pokemon);
    let history = useSelector((state: RootState)=> state.pokemons.history);

    if(pokemons.length === 0){
        dispatch(setDataPokemon() as any);
    }
    
    const goToDetail = (id: any) => {
      
      navigate(`/pokemon/${id}`)
    }

    console.log(history)
    //localStorage.clear()
    
        
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
                {pokemons?.map((item:any) => 
                    <tr className='h-12 border-b-slate-200 border-b-[1px]' key={item.id} onClick={() => goToDetail(item.id)}>
                    <td className='text-start text-inti font-bold capitalize'>{item.name}</td>
                    <td className='text-end font-bold'>{item.stock}</td>
                    </tr>
                )}
            </tbody>
            </table>
    </div>
  )
}

export default ListPokemonTable