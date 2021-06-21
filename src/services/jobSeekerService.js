import axios from "axios";

export default class JobSeekerService {
    getJobSeekers() {
        return axios.get("http://localhost:8080/api/jobseekers/getAll" )
    }

    getJobSeekerById(id) {
        return axios.get("http://localhost:8080/api/jobseekers/getById?userId=" + id )
    }

    addJobSeeker(values) {
         return axios.post("http://localhost:8080/api/jobseekers/add", values)
    }

    // deleteJobSeeker() {
    //     return axios.post("http://localhost:8080/api/jobseekers/delete"  + jobSeeker)
    // }

    // updateJobSeeker() {
    //     return axios.post("http://localhost:8080/api/jobseekers/update"  + jobSeeker)
    // }

}