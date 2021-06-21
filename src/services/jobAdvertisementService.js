import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }

    getAllActiveJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllActiveJobAdvertisements")
    }

    getAllActiveJobAdvertisementsByEmployer(id) {
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllActiveJobAdvertisementsByEmployer?id" + id)
    }

    getAllActiveJobAdvertisementsSortedByJobAdvertisementPublicationDate() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllActiveJobAdvertisementsSortedByJobAdvertisementPublicationDate")
    }

    getJobAdvertisementById(id) {
        return axios.get("http://localhost:8080/api/jobadvertisements/getbyid?id=" + id)
    }

    addJobAdvertisement(values) {
    return axios.post("http://localhost:8080/api/jobadvertisements/create", values)
    }

    // deleteJobAdvertisement() {
    //     return axios.post("http://localhost:8080/api/jobadvertisements/delete", jobAdvertisement)
    // }

    // updateJobAdvertisement() {
    //     return axios.post("http://localhost:8080/api/jobadvertisements/update", jobAdvertisement)
    // }

}