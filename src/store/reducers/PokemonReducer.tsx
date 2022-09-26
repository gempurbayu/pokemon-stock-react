const initialState = {
    pokemon: [],
    history: [],
    confirmation: [],
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

    }
}

export default PokemonReducer