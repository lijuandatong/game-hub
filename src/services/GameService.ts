import apiClient from "./api-client"
import create from "./HttpService"

export interface FetchGamesResponse {
  count: number
  results: Game[]
}

export interface Platfrom {
  id: number
  name: string
  slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform: Platfrom} [] // design smell 不好的设计
    metacritic: number
  }

export default create('/games')