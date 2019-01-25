import axios from "axios";

export default {

   // Search the database 
  getUser: function(res) {
    return axios.post("/api/signin/", res);
  },
  createUser: function(res) {
    return axios.post("/api/signup/", res);
  },
  checkAuth: function(res) {
    console.log("Query in API = " + JSON.stringify(res));
    return axios.post("/api/verify/", res);
  }
};
