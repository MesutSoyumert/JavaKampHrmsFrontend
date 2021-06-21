import axios from "axios";

export default class GeneralJobPositionService {
    getGeneralJobPositions() {
        return axios.get("http://localhost:8080/api/generaljobpositions/getall")
    }

    addGeneralJobPosition(values) {
        return axios.post("http://localhost:8080/api/generaljobpositions/add", values)
    }

    // deleteGeneralJobPosition() {
    //     return axios.post("http://localhost:8080/api/generaljobpositions/delete" + generalJobPosition)
    // }

    // updateGeneralJobPosition() {
    //     return axios.post("http://localhost:8080/api/generaljobpositions/update" + generalJobPosition)
    // }

}