import { fadeConfig } from "@chakra-ui/react"
import { AxiosRequestConfig } from "axios"
import apiClient, { FetchResponse } from "./api-client"
import { Genre } from "../../entities/Genre"
import { Platform } from "../../entities/Platform"

interface Entity{
    id: number
}

class httpService<T>{
    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return apiClient.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }

    get = (id: number | string) => {
        return apiClient.get<T>(this.endpoint + '/' + id).then(res => res.data)
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

export default httpService