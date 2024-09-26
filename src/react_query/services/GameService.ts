import httpService from "./httpService"
import { Platform } from "./platformService"

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform: Platform} [] // design smell 不好的设计
    metacritic: number
    rating_top: number
  }

  export default new httpService<Game>('/games')