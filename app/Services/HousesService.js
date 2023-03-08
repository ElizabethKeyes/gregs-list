import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

function _saveHouses() {
  saveState('houses', appState.houses)
}

class HousesService {

  createHouse(formData) {
    let house = new House(formData)
    appState.houses.push(house)
    appState.emit('houses')
    console.log(appState.houses, 'house has been created');
    _saveHouses()
  }

  deleteHouse(id) {
    let remainingHouses = appState.houses.filter(h => h.id != id)
    appState.houses = remainingHouses
    _saveHouses()
  }

}

export const housesService = new HousesService()