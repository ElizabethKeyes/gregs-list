import { generateId } from "../Utils/generateId.js"


export class Job {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.location = data.location
    this.description = data.description
    this.imgURL = data.imgURL
  }

  get cardTemplate() {
    return `
    <div class="col-6 col-md-4">
      <div class="card elevation-2 mb-4">
        <img
          src="${this.imgURL}" class="my-card-imgs">
        <div class="p-2">
          <h5 class="text-center border-bottom border-dark pb-2">${this.title} | ${this.location}</h5>
          <p>${this.description}</p>
          <button class="btn btn-outline-danger" title="delete listing" onclick="app.jobsController.deleteJob('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
      </div>
    </div>
    `
  }

  static jobForm() {
    return `
    <form onsubmit="app.jobsController.postJob()" class="row bg-white rounded elevation-2 p-4 my-4">
    <h3>Post a Job</h3>
    <div class="mb-2 col-6">
      <label for="title">Job Title</label>
      <input type="text" name="title" id="title" class="form-control" min="1" required>
    </div>
    <div class="col-6 mb-2">
      <label for="location">Location</label>
      <input type="text" name="location" id="location" placeholder = "City" class="form-control" min="1" required>
    </div>
    <div class="mb-2 col-12">
      <label for="imgURL">Image URL</label>
      <input type="url" name="imgURL" id="imgURL" class="form-control" required>
    </div>
    <div class="col-12 mb-2">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" class="form-control" required>
    </div>
    <div class="col-12 mt-2 text-end">
      <button class="btn" type="button">Cancel</button>
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
    `
  }

}