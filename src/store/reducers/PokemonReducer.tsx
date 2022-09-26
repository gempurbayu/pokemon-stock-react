const initialState = {
    pokemon: [],
    history: [],
    updateTemp: {}
}

const PokemonReducer = (state = initialState, action: { type: any; payload: any }) => {
    const {type, payload} = action
    switch(type){
        default:
            return state
        case "SET_DATA_POKEMON":
            return {
                ...state,
                pokemon: payload.pokemons,
                history: payload.history
            }
        case "UPDATE_DATA_TEMP":
            return {
                ...state,
                updateTemp: payload
            }
        case "UPDATE_STOK_CONFIRMATION":
            const stocks = payload.total + payload.prevStock;
            const pokeman = state.pokemon.map((item:any) => {
                if(item.id === payload.idPokemon){
                    return {
                        ...item,
                        stock: stocks
                    }
                } else {
                    return item
                }
            })
            return {
                ...state,
                pokemon: pokeman
            }
            
    }
}

export default PokemonReducer