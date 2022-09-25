import Axios from 'axios';
import { Dispatch } from 'redux';

export const setDataPokemon = () => {
    return(dispatch: Dispatch) => {
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(result => {
            const responseAPI = result.data.results;
            let pokemons = [];
            for(let i = 0; i < responseAPI.length; i++){
                let object = {
                    id: i+1,
                    name: responseAPI[i]?.name,
                    history: [
                        {
                            id: 1,
                            action: "Stock Awal",
                            description: "Stock Awal",
                            total: 0,
                            prevStock: 0,
                        },
                    ],
                    stock: 0,
                };
                pokemons.push(object);
            }
            dispatch({type: 'SET_DATA_POKEMON', payload: pokemons});
        })
        .catch(err => {
            console.log('error: ', err);
        })
    }
}