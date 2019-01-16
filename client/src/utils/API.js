import axios from "axios";

export default {

  getActivity: function(name) {
    return axios.get("/api/activities/" + name)
  },
  // Gets the book with the given id
  getActivities: function() {
    return axios.get("/api/activities");
  },
  getCountyParks: function() {
      return axios.get("/api/parks/county");
  }
//   getStateParks: function() {
//       return axios.get("/api/parks/state");
//   }

//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
};