import axios from "axios";

export default class GeneralJobPositionService {
    getGeneralJobPositions() {
        return axios.get("http://localhost:8080/api/generaljobpositions/getall")
    }

    // addGeneralJobPosition() {
    //     return axios.post("http://localhost:8080/api/generaljobpositions/add" + generalJobPosition)
    // }

    // deleteGeneralJobPosition() {
    //     return axios.post("http://localhost:8080/api/generaljobpositions/delete" + generalJobPosition)
    // }

    // updateGeneralJobPosition() {
    //     return axios.post("http://localhost:8080/api/generaljobpositions/update" + generalJobPosition)
    // }

}