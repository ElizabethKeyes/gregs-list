import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.imgURL = data.imgURL
    this.price = data.price
    this.description = data.description

  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
      <div class="card elevation-2">
        <img
          src="${this.imgURL}"
          alt="${this.bedrooms}-${this.bathrooms}">
        <div class="p-2">
          <h5 class="text-center border-bottom border-dark">${this.sqft} Sq. ft. | Built in ${this.year}</h5>
          <p>${this.description}</p>
          <p class="text-end">$${this.price}</p>
          <button class="btn btn-outline-danger" title="delete listing" onclick="app.carsController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
      </div>
    </div>
    `
  }
}