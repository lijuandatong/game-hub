import { Game } from "../services/GameService"
import useData from "./useData"

const useGames = () => useData<Game>('/games')

export default useGames