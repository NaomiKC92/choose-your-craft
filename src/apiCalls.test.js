import {getBeerList} from './apiCalls.js'

describe('getBeerList', () => {
  let mockResponse = {beers: [
    {id:3, name: 'Pilsner', isFavorited: false}, {id:5, name: 'PaleAle', isFavorited: false}
  ]}
  
  window.fetch = jest.fn().mockImplementation( () => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })
  })

  it('should call fetch with the correct URL', () => {
    getBeerList()

    expect(window.fetch).toHaveBeenCalledWith('https://api.punkapi.com/v2/beers')
  })

  
})