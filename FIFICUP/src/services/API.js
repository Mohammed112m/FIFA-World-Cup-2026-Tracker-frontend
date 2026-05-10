import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:3229",
})

export default API


// here we do this fils to make easy when we make connect with backend just only in the top of page import API from "../services/api" .. 
