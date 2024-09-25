import { AxiosRequestConfig } from "axios"
import apiClient from "./api-client"

interface Entity{
    id: number
}

class HttpService<T>{
    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = () => {
        return apiClient.get<T>(this.endpoint).then(res => res.data)
    }

    // delete(id: number){
    //     return apiClient.delete(this.endpoint + '/' + id)
    // }

    add = (entity: T) => {
        return apiClient.post(this.endpoint, entity).then(res => res.data)
    }
    
    // update<T extends Entity>(entity: T){
    //     return apiClient.patch(this.endpoint + '/' + entity.id, entity)
    // }

}

const create = (endpoint: string) => new HttpService(endpoint)

export default create