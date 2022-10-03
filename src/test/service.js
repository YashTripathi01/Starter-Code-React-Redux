import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = {
    "Content-Type": "application/json",
};

class UserService {
    getUserService = () => {
        return axios
            .get(`${BASE_URL}/users`, headers)
            .then((response) => response)
            .catch((error) => error.response.data);
    };
}

export default new UserService();
