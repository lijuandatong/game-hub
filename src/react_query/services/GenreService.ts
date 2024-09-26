import httpService from "./httpService"

export interface Genre {
    id: number
    name: string
    image_background: string
}

export default new httpService<Genre>('/genres')