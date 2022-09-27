import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateData } from '../store/actions/PokemonAction'

interface ModalProps {
    open: boolean,
    close: any,
    pokemonid : any

}

const UpdateStokModal = (props: ModalProps) => {

    const { open, close, pokemonid } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [yes, setYes] = useState(true);

    let [update, setUpdate] = useState({
        pcs : 0,
        lusin: 0,
        total: 0,
        pokemonid: Number(pokemonid),
        description : '',
        action: 'Update Stok'
    });
    let [pcs, setPcs] = useState(0);
    let [lusin, setLusin] = useState(0);

    const handlePcs = (e: any) => {
        let num = Number(e.target.value * 1);

        setPcs(num);
        setUpdate((prevState) => ({
            ...prevState,
            pcs: num,
            total: num + lusin
          }))
    }

    const handleLusin = (e: any) => {
        let num = Number(e.target.value) * 12;
        setLusin(num);
        setUpdate((prevState) => ({
            ...prevState,
            lusin: Number(e.target.value),
            total: num + pcs
          }))
    }

    const handleUpdate = () => {
        try{
            dispatch(updateData(update) as any);
            setYes(false);
            navigate('/confirmation');
        }catch(error) {
            alert(error)
        }
    }

    console.log(update)

    if(( open && yes)) {
        return (
            <div className='absolute bg-gray-900 bg-opacity-40 w-[100vw] h-[100vh] top-0 left-0 text-basecolor'>
                <div className='modal absolute p-6 w-11/12 h-[412px] opacity-100 bg-slate-100 left-[4%] top-[20%] shadow-lg rounded-lg text-center'>
                    <h4 className='text-xl font-bold text-center'>Update stok</h4>
                    <span className='text-sm text-center'>Masukkan jumlah stok yang tersedia di rak saat ini.</span>
                    <table className='table-auto mt-6 w-full font-nunito'>
                        <thead>
                            <tr className='h-12 border-b-slate-800 border-b-[1px]'>
                            <th  className='text-start w-5/12'>Kemasan</th>
                            <th  className='text-end w-4/12'>Jumlah</th>
                            <th  className='text-end w-3/12'>Stok</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='h-14 border-b-slate-200 border-b-[1px]'>
                                <td className='text-start font-bold capitalize text-sm'>Pcs</td>
                                <td className='text-end font-bold'>
                                    <div className='w-full flex flex-row'>
                                    <span className='my-auto font-normal w-5/12 text-end pr-[8%]'>1 <span>x</span> </span>
                                    <input className="shadow appearance-none border rounded w-5/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="jumlah" 
                                            type='number'
                                            name='jumlah' 
                                            placeholder=''
                                            required
                                            onChange={(e) => handlePcs(e)}
                                            >
                                    </input>
                                    <span className='my-auto font-normal w-2/12'>=</span>
                                    </div>
                                </td>
                                <td className='text-end font-normal capitalize text-sm'>{pcs}</td>
                            </tr>
                            <tr className='h-14 border-b-slate-800 border-b-[1px]'>
                                <td className='text-start font-bold capitalize text-sm'>Lusin</td>
                                <td className='text-end font-bold'>
                                    <div className='w-full flex flex-row'>
                                    <span className='my-auto font-normal w-5/12 text-end pr-[8%]'>12 <span>x</span> </span>
                                    <input className="shadow appearance-none border rounded w-5/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="jumlah" 
                                            type='number'
                                            name='jumlah' 
                                            placeholder=''
                                            required
                                            onChange={(e) => handleLusin(e)}
                                            >
                                    </input>
                                    <span className='my-auto font-normal w-2/12'>=</span>
                                    </div>
                                </td>
                                <td className='text-end font-normal capitalize text-sm'>{lusin}</td>
                            </tr>
                            <tr className='h-14'>
                                <td className='text-start font-bold capitalize text-sm'>Total Stok <span className='font-normal'>(dalam pcs)</span></td>
                                <td className='text-end font-bold'>
                                    
                                </td>
                                <td className='text-end font-normal capitalize text-sm'>{update.total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='btn-group w-full justify-end mt-4 flex flex-row'>
                    <button className='border-none border-0 rounded-[4px] py-0.5 text-sm w-[105px] h-10 font-bold text-white bg-inti shadow-sm shadow-inti mr-4'
                            onClick={() => handleUpdate()}
                    >
                        Simpan
                    </button>
                    <button className='border-gray-300 border-2 rounded-[4px] py-0.5 text-sm w-[105px] h-10 font-bold text-inti bg-gray-100 shadow-md'
                            onClick={close}
                    >
                        Batal
                    </button>
                    </div>
                </div>
            </div>
          )
    } else {
        return null
    }
  
}

export default UpdateStokModal