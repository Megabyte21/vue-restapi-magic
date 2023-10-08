/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cat-fact.herokuapp.com',
})

const useApi = () => {
  return { instance }
}

export default useApi
