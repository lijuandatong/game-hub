import Screenshot from "../../entities/Screenshot"
import httpService from "./httpService"

const screenshotsService = (gameId: number) => new httpService<Screenshot>(`/games/${gameId}/screenshots`)

export default screenshotsService