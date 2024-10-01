import { Game } from "../../entities/Game"
import httpService from "./httpService"

export default new httpService<Game>('/games')