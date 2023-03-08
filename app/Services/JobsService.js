import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { saveState } from "../Utils/Store.js";

function _saveJobs() {
  saveState('jobs', appState.jobs)
}

class JobsService {

  postJob(FormData) {
    console.log('creating form in service');
    let job = new Job(FormData)
    appState.jobs.push(job)
    console.log(appState.jobs);
    appState.emit('jobs')
    _saveJobs()
  }

  deleteJob(id) {
    let remainingJobs = appState.jobs.filter(j => j.id != id)
    appState.jobs = remainingJobs
    _saveJobs()
  }

}


export const jobsService = new JobsService()