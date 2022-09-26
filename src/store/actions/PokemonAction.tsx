import Axios from 'axios';
import { Dispatch } from 'redux';

export const setDataPokemon = () => {
    return(dispatch: Dispatch) => {
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(result => {
            const responseAPI = result.data.results;
            let pokemons = [];
            let history = [];
            for(let i = 0; i < responseAPI.length; i++){
                let objPokemon = {
                    id: i+1,
                    name: responseAPI[i]?.name,
                    stock: 0
                };

                let objHistory = {
                    idPokemon: objPokemon.id,
                    action: "Stock Awal",
                    description: "Stock Awal",
                    total: 0,
                    prevStock: 0,
                    date: Date()
                }
                pokemons.push(objPokemon);
                history.push(objHistory);
            }

            const data = {
                pokemons,
                history,
            }
            dispatch({type: 'SET_DATA_POKEMON', payload: data});
        })
        .catch(err => {
            console.log('error: ', err);
        })
    }
}

export const UpdateStokConfirmation = (data: any) => {
    return {
        type : "UPDATE_STOK_CONFIRMATION",
        payload : data
    }
}

export const updateData = (data: any) => {
    return {
        
        type : "UPDATE_DATA_TEMP",
        payload : data
    }
}


