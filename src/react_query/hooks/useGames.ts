import { Game, Platform } from "../services/GameService"
import { Genre } from "../services/GenreService"
import { useQuery } from "@tanstack/react-query"
import apiClient, { FetchResponse } from "../services/api-client"
import { GameQuery } from "../../App"

const useGames = (gameQuery: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.get<FetchResponse<Game>>('/games', { 
            params: {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            } 
        }).then(res => res.data),
        staleTime: 10 * 60 * 1000
        // queryFn: GenreService.getAll
    })
}

export default useGames