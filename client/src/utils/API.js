import axios from "axios";

export default {

  getActivity: function(id) {
    return axios.get("/api/activities/" + id)
  },
  // Gets the book with the given id
  getActivities: function() {
    return axios.get("/api/activities");
  }

//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
};