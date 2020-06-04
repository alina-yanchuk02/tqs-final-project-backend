import axios from "axios";

// PARA POST:

const api = axios.create({
  baseURL: 'https://springtqs.herokuapp.com'
});



export default api;