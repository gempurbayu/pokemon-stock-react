/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ArrowIcon from '../../assets/icons/back.svg'
import DetailStokOpname from '../../components/DetailStokOpname';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { UpdateStokConfirmation } from '../../store/actions';
import { useDispatch } from 'react-redux';

const ConfirmationUpdate = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let [confirmation, setConfirmation] = useState({})

    let updateTemp = useSelector((state: RootState)=> state.pokemons.updateTemp);
   
    let pokemon = useSelector((state: RootState)=> state.pokemons.pokemon);

    const poke = pokemon.find((item: any) => item.id === updateTemp.pokemonid)
    
    useEffect(() => {
        setConfirmation({
            idPokemon: Number(poke.id),
            action: updateTemp.action,
            description: "",
            total: Number(updateTemp.total),
            prevStock: Number(poke.stock),
            date: Date()
        });
    },[updateTemp])

    const handleDescription = (e: any) => {
        setConfirmation(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }
    const handleSubmit = () => {
        setConfirmation(prevState => ({
            ...prevState,
            date: Date()
        }))

        try{
            dispatch(UpdateStokConfirmation(confirmation) as any)
            navigate(`/pokemon/${poke.id}`)
        }catch(error) {
            alert(error)
        }

    }

    console.log(confirmation)

  return (
    <div>
        <Header title={poke.name} icon='cancel'/>
        <div className='w-full h-full px-[4%] font-rubik text-basecolor'>
            {/* Title Page */}
            <div className='section2 w-full mt-6 flex flex-col font-rubik h-140 py-4'>
                <h1 className='text-[28px] font-bold mb-6 text-basecolor capitalize'>Konfirmasi update stok</h1>
            </div>
            <div className='stok-info flex flex-col w-full text-start mt-4'>
                <p className='text-sm'>Selisih</p>
                <p className='text-3xl'>+{updateTemp.total}</p>
            </div>
            <div className='flex flex-row w-full justify-between mt-4 mb-10 py-auto'>
                <div className='w-6/12'>
                    <p className='text-sm'>Di sistem</p>
                    <p className='text-xl'>{poke.stock} pcs</p>
                </div>
                <div className='w-2/12 text-end'>
                    <img src={ArrowIcon} alt='arrow' className='rotate-180'/>
                </div>
                <div className='w-5/12 text-start'>
                    
                    <p className='text-sm'>Hasil update stok</p>
                    <p className='text-xl'>{poke.stock + updateTemp.total}</p>
                </div>
            </div>
            <DetailStokOpname data={updateTemp} prevstock={poke.stock} pokemonid={poke.id}/>
            <div className='w-full'>
                <h3 className='font-bold text-[16px] mb-2 mt-4'>Catatan</h3>
                <textarea className='w-full h-20 px-2 py-1 border-2 shadow-inner border-slate-300 rounded-md'
                            
                            onChange={(e) => handleDescription(e)}
                ></textarea>
                <div className='w-full text-end mt-6'>
                    <button className='w-[80px] h-[40px] text-sm bg-inti text-white rounded-[4px]' onClick={() => handleSubmit()}>Simpan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationUpdate