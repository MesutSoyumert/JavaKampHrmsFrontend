import axios from "axios";

export default class JobAdvertisementJobPositionPlaceService{
    getJobAdvertisementJobPositionPlaces(){
        return axios.get("http://localhost:8080/jobpositionplaces/getall")
    }
}