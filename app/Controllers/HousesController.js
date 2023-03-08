import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
  _drawHouseForm()
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    appState.on('houses', _drawHouses)
  }


  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  createHouse() {
    event.preventDefault()
    console.log('creating a house');
    let form = event.target;
    let formData = getFormData(form)
    console.log(form);
    housesService.createHouse(formData)
    // @ts-ignore
    form.reset()
  }

  async deleteHouse(id) {
    if (await Pop.confirm("Are you sure you want to delete this listing?"))
      housesService.deleteHouse(id)
  }

}