import { useQuery } from "@tanstack/react-query"
import apiClient, { FetchResponse } from "../services/api-client"
import platforms from "../../data/platforms"
import genreService from "../services/genreService"
import platformService, { Platform } from "../services/platformService"

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms
        
    })
}

export default usePlatforms