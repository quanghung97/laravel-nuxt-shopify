import axios from 'axios'
import store from './../store/index'

let instance = axios.create()

axios.defaults.baseURL = 'http://api.laravelserver.local:8000/api/'
axios.defaults.withCredentials = true

export default instance
