import httpService from "./httpService"
import Platform from "../../entities/Platform"

export default new httpService<Platform>('/platforms/lists/parents')