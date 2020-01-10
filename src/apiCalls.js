export const getBeerList = () => {
  return fetch('https://api.punkapi.com/v2/beers')
    .then(res => {
      if(!res.ok) {
        throw Error('The tap broke, couldn\'t get your beer')
      }
      return res.json()
    })
};