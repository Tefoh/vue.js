import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337'
})

if (localStorage.getItem('token')) {
  axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
}

export default axiosInstance