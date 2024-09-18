import { Game } from "../services/GameService"
import { Genre } from "../services/GenreService"
import useData from "./useData"

const useGames = (selectedGenre: Genre | null) => 
    useData<Game>(
        '/games', 
        { params: {genres: selectedGenre?.id} }, 
        [selectedGenre?.id] 
        )

export default useGames