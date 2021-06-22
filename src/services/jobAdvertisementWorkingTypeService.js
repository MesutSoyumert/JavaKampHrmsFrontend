import axios from "axios";

export default class JobAdvertisementWorkingTypeService{
    getJobAdvertisementWorkingTypes(){
        return axios.get("http://localhost:8080/jobpositionworkingtype/getall")
    }
}