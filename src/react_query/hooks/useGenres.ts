
import { useQuery } from "@tanstack/react-query"
import ms from 'ms'
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