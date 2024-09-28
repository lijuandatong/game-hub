import { Game } from "../services/GameService"
import { GameQuery } from "../store"
import useData from "./useData"

const useGames = (gameQuery: GameQuery) => 
    useData<Game>(
        '/games', 
        { params: 
            {genres: gameQuery.genreId, 
             platforms: gameQuery.platformId,
             ordering: gameQuery.sortOrder,
             search: gameQuery.searchText
            } 
        }, 
        [gameQuery] 
        )

export default useGames