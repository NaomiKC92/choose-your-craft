export const favorites = (state=[], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE': 
      return [...state, action.beerId]
    default: 
      return state;
  }
}
