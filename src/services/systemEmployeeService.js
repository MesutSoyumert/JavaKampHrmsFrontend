import axios from "axios";

export default class SystemEmployeeService {
    getSystemEmployees() {
        return axios.get("http://localhost:8080/api/systememployees/getall")
    }

    addSystemEmployee(values) {
        return axios.post("http://localhost:8080/api/systememployees/add", values)
    }

    // deleteSystemEmployee() {
    //     return axios.post("http://localhost:8080/api/systememployees/delete"  + systmEmployee)
    // }

    // updateSystemEmployee() {
    //     return axios.post("http://localhost:8080/api/systememployees/update"  + systmEmployee)
    // }

}