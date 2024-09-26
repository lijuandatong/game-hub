import axios, { CanceledError} from 'axios'

export interface FetchResponse<T> {
    count: number
    results: T[]
    next: string | null
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '10173e10932c4ff99e784c193b3b208c'
    }
})