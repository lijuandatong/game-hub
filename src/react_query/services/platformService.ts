import httpService from "./httpService"

export interface Platform {
  id: number
  name: string
  slug: string
}

export default new httpService<Platform>('/platforms/lists/parents')