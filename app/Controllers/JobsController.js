import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawJobs() {
  let jobs = appState.jobs
  let template = ``
  jobs.forEach(j => template += j.cardTemplate)
  setHTML('listings', template)
}

function _drawForm() {
  setHTML('form', Job.jobForm())
}

export class JobsController {
  constructor() {
    console.log('jobs controller accessed');
    appState.on('jobs', _drawJobs)
  }

  showJobs() {
    _drawJobs()
    _drawForm()
  }

  postJob() {
    event.preventDefault()
    console.log('job has been posted');
    let form = event.target;
    let formData = getFormData(form)
    jobsService.postJob(formData)
    // @ts-ignore
    form.reset()
  }

  deleteJob(id) {
    jobsService.deleteJob(id)
  }

}