import axios, { CanceledError} from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '10173e10932c4ff99e784c193b3b208c'
    }
})


export { CanceledError }