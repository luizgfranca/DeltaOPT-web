import axios from 'axios'

const backend = axios.create({
    baseURL: "http://localhost:8080"
})

export default backend;