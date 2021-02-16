import axios from 'axios'

export const cancelToken = axios.CancelToken

const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: 'Bearer token'
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (error) => {
    console.log(error.message)

    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    console.log(error.message)

    return Promise.reject(error)
  }
)

export default axiosInstance
