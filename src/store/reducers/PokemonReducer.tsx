interface MyPokemon {
    pokemon : [],
    history: [],
}

const initialState = {
    pokemon: [],
    history: [],
} as MyPokemon

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