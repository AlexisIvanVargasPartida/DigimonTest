export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const capitalize=(store)=>(next)=>(action)=>{
        const firstLetter = action.action.payload.map( digimon => ({
            ...digimon,
            name: 'AV: ' + digimon.name.charAt(0).toUpperCase() + digimon.name.slice(1)
        }) )
    
        const updatedAction = {
            ...action,
            action: {...action.action, payload: firstLetter}
        }
        next(updatedAction);
    
}