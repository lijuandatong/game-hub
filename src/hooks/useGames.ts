import { GameQuery } from "../App"
import { Game, Platform } from "../services/GameService"
import { Genre } from "../services/GenreService"
import useData from "./useData"

const useGames = (gameQuery: GameQuery) => 
    useData<Game>(
        '/games', 
        { params: 
            {genres: gameQuery.genre?.id, 
             platforms: gameQuery.platform?.id,
             ordering: gameQuery.sortOrder,
             search: gameQuery.searchText
            } 
        }, 
        [gameQuery] 
        )

export default useGames