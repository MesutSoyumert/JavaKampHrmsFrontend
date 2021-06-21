import axios from "axios";

export default class BaseUserService {

     addBaseUser(values) {
         return axios.post("http://localhost:8080/api/users/add", values)
    }

    getBaseUsers() {
        return axios.get("http://localhost:8080/api/users/getall")
    }

    getUserByEmailaddress(emailAddress) {
        return axios.get("http://localhost:8080/api/users/findByEmailAddress?emailAddress=" + emailAddress)
    }
}