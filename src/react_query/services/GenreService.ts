import Genre from "../../entities/Genre"
import httpService from "./httpService"

export default new httpService<Genre>('/genres')