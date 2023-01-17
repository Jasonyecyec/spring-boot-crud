import axios from "axios";
const USER_API_BASE_URL =
  "https://spring-boot-crud-backend-production.up.railway.app/api/employees";

class UserService {
  //save user using POST
  saveUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  //get users
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  //delete user
  deleteUser(userId) {
    return axios.delete(`${USER_API_BASE_URL}/${userId}`);
  }

  //get user by id
  getUserById(userId) {
    return axios.get(`${USER_API_BASE_URL}/${userId}`);
  }

  //update user
  udpateUser(user) {
    return axios.put(USER_API_BASE_URL, user);
  }
}

export default new UserService();
