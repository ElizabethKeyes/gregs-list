import { appState } from "../AppState.js"
import { House } from "../Models/House.js"



class HousesService {

  createHouse(formData) {
    let house = new House(formData)
    appState.houses.push(house)
    appState.emit('houses')
    console.log(appState.houses, 'house has been created');
  }

  deleteHouse(id) {
    let remainingHouses = appState.houses.filter(h => h.id != id)
    appState.houses = remainingHouses
  }

}

export const housesService = new HousesService()