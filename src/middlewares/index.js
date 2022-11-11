export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

export const myMiddleware = (store) => (next) => (actionInfo) => {
    const alphabetPokemon = actionInfo.action.payload.map(poke => poke.name).sort()
    const pokemonPayload = actionInfo.action.payload.map((poke, index) => ({ ...poke, name: alphabetPokemon[index] }))

    const myFormatPokemon = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: pokemonPayload}       
    }

    // console.log(myFormatPokemon)
    next(myFormatPokemon)
}

export const capitalize=(store)=>(next)=>(action)=>{
        const firstLetter = action.action.payload.map( pokemon => ({
            ...pokemon,
            name: 'AV: ' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }) )
    
        const updatedAction = {
            ...action,
            action: {...action.action, payload: firstLetter}
        }
        next(updatedAction);
    
}