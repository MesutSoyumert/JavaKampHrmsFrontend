import axios from "axios";

export default class EmployerService {
    getEmployers() {
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getEmployerById(employerId) {
        return axios.get("http://localhost:8080/api/employers/getbyid?employerId=" + employerId)
    }

    addEmployer(values) {
        return axios.post("http://localhost:8080/api/employers/add", values)
    }

    // deleteEmployer() {
    //     return axios.post("http://localhost:8080/api/employers/delete", employer)
    // }

    // updateEmployer() {
    //     return axios.post("http://localhost:8080/api/employers/update", employer)
    // }

    performEmployerEmailValidationByEmployer(id) {
        return axios.get("http://localhost:8080/api/employers/performemployeremailvalidationbyemployer?id=" + id)
    }

    performEmployerEmailValidationBySystemEmployee(id) {
        return axios.get("http://localhost:8080/api/employers/performemployeremailvalidationbysystememployee?id=" + id)
    }
}