import axios from "axios";

export default class CitiesOfTurkeyService {
    getCitiesOfTurkey() {
        return axios.get("http://localhost:8080/api/CitiesOfTurkey/getAll")
    }

}