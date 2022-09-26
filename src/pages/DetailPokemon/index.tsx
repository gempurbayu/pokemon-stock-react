import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import HistoryStock from '../../components/HistoryStock';
import UpdateStokModal from '../../components/UpdateStokModal';
import { RootState } from '../../store';

const DetailPokemon = () => {
    let { id } = useParams();
    
    let [open, setOpenModal] = useState(false);
    let historyByID = [];

    let pokemons = useSelector((state: RootState)=> state.pokemons.pokemon);
    let history = useSelector((state: RootState)=> state.pokemons.history);
    
    //find pokemon by id in params
    const poke = pokemons.find((item: any) => item.id === Number(id))
    
    if(historyByID.length === 0) {
        for(let i = 0; i < history.length; i++){
            if(history[i].idPokemon === Number(id)) {
                historyByID.push(history[i])
                console.log(history[i])
            }
        }
    }

    const handleModal = () => {
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }
    
    console.log(historyByID)

  return (
    <div className=''>
        <Header title='Stok Pokémon' icon='back'/>
        <div className='w-full h-full px-[4%]'>
            {/* Title Page */}
            <div className='section2 w-full mt-6 flex flex-col font-rubik h-140 py-4'>
                <h1 className='text-[28px] font-bold mb-6 text-basecolor capitalize'>{poke.name}</h1>
                <button className='border-gray-200 border-2 rounded-[4px] py-0.5 text-sm w-[105px] h-10 font-bold text-inti bg-gray-100 shadow-sm'
                        onClick={handleModal}
                >Update Stok</button>
            </div>
            <div className='stok-info flex flex-col w-full text-start mt-4 mb-[40px]'>
                <p className='text-sm'>Sisa stok</p>
                <p className='text-3xl'>{poke.stock} pcs</p>
            </div>
            <HistoryStock data={historyByID}/>
        </div>
        <UpdateStokModal open={open} close={closeModal} pokemonid={id}/>
       
    </div>
  )
}

export default DetailPokemon