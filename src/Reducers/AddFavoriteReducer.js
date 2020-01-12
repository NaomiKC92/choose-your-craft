export const favorites = (state=[], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE': 
      return [...action.beer]
    default: 
      return state;
  }
}
