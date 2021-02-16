import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: 'Bearer token'
  }
})

export default axiosInstance
