import { Platform } from "../services/GameService"
import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "./useData"
import apiClient from "../services/api-client"
import platforms from "../../data/platforms"

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, results: platforms}
        // queryFn: GenreService.getAll
    })
}

export default usePlatforms