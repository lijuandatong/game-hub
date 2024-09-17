import create from "./HttpService"

export interface FetchGenresResponse {
    count: number
    results: Genre[]
  }
  
export interface Genre {
    id: number
    name: string
}

export default create('/genres')