import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft.toLocaleString()
    this.imgURL = data.imgURL
    this.price = data.price.toLocaleString()
    this.description = data.description

  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
      <div class="card elevation-2">
        <img
          src="${this.imgURL}"
          alt="${this.bedrooms}-${this.bathrooms}" class="rounded">
        <div class="p-2">
          <h5 class="text-center border-bottom border-dark">${this.sqft} Sq. ft. | Built in ${this.year}</h5>
          <p>${this.description}</p>
          <p class="text-end">$${this.price}</p>
          <button class="btn btn-outline-danger" title="delete listing" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
      </div>
    </div>
    `
  }

  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4 my-4">
      <h3>List a House</h3>
      <div class="mb-2 col-4">
        <label for="bedrooms">Bedrooms</label>
        <input type="number" name="bedrooms" id="bedrooms" class="form-control" min="1" required>
      </div>
      <div class="col-4 mb-2">
        <label for="bathrooms">Bathrooms</label>
        <input type="number" name="bathrooms" id="bathrooms" class="form-control" min="1" required>
      </div>
      <div class="mb-2 col-4">
        <label for="year">Year Built</label>
        <input type="number" name="year" id="year" class="form-control" min="1900" max="2023" required>
      </div>
      <div class="col-6 mb-2">
        <label for="sqft">Sq. Ft.</label>
        <input type="number" name="sqft" id="sqft" class="form-control" min="100" required>
      </div>
      <div class="col-6 mb-2">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" class="form-control" min="1000" required>
      </div>
      <div class="col-12 mb-2">
        <label for="imgURL">Image Link (URL)</label>
        <input type="url" name="imgURL" id="imgURL" class="form-control" required>
      </div>
      <div class="col-12 mb-2">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" class="form-control" maxlength="100">
      </div>
      <div class="col-12 mt-2 text-end">
        <button class="btn" type="button">Cancel</button>
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
    `
  }
}