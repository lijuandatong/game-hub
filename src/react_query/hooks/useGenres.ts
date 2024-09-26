
import { CACHE_KEY_GENRES } from "../constants"
import GenreService, { Genre } from "../services/genreService"
import { useQuery } from "@tanstack/react-query"
import apiClient, { FetchResponse } from "../services/api-client"
import genres from "../../data/genres"
import genreService from "../services/genreService"


const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, results: genres}
        // queryFn: GenreService.getAll
    })
}

export default useGenres