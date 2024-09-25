
import { CACHE_KEY_GENRES } from "../constants"
import GenreService, { FetchGenresResponse, Genre } from "../services/GenreService"
import { useQuery } from "@tanstack/react-query"
import apiClient, { FetchResponse } from "../services/api-client"
import genres from "../../data/genres"


const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, results: genres}
        // queryFn: GenreService.getAll
    })
}

export default useGenres