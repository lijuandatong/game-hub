import apiClient from "./api-client"
import create from "./HttpService"

export interface FetchGamesResponse {
  count: number
  results: Game[]
}

export interface Game {
    id: number
    name: string
  }

export default create('/games')