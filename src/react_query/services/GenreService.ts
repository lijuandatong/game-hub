import create from "./HttpService"

export interface FetchGenresResponse {
    count: number
    results: Genre[]
  }
  
export interface Genre {
    id: number
    name: string
    image_background: string
}

export default create('/genres')