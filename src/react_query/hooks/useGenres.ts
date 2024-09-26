
import { CACHE_KEY_GENRES } from "../constants"
import GenreService, { Genre } from "../services/genreService"
import { useQuery } from "@tanstack/react-query"
import ms from 'ms'
import apiClient, { FetchResponse } from "../services/api-client"
import genres from "../../data/genres"
import genreService from "../services/genreService"


const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: genreService.getAll,
        staleTime: ms('24h'),
        initialData: genres
    })
}

export default useGenres