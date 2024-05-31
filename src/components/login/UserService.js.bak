import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {

    getUsers = () => axios.get(USER_API_BASE_URL);

    createUser = (user) => axios.post(USER_API_BASE_URL, user);

    getUserById(userid){
        return axios.get(USER_API_BASE_URL+"/"+userid);
    }

    updateUser(user, userid){
        return axios.put(USER_API_BASE_URL+"/"+userid, user);
    }

    deleteUser(userid){
        return axios.delete(USER_API_BASE_URL+"/"+userid);
    }

}

export default new UserService()