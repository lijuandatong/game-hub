import { Genre } from "../../entities/Genre"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import ms from 'ms'
import apiClient, { FetchResponse } from "../services/api-client"
import gameService from "../services/gameService"
import { Game } from "../../entities/Game"
import useGameQueryStore from "../../store"

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1}) => 
        gameService.getAll({ 
            params: {
                genres: gameQuery.genreId, 
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam,
                page_size: 10
            } 
        }),
        staleTime: ms('2h'),
        getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined
    })
}

export default useGames