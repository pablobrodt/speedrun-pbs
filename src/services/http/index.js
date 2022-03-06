import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://www.speedrun.com/api/v1',
  timeout: 10000,
});

function get(endpoint, params) {
  const config = { params }

  return axiosInstance.get(endpoint, config)
}

export const http = {
  get,
}