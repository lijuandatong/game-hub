import { useQuery } from "@tanstack/react-query"
import trailersService from "../services/trailersService"

const useTrailers = (gameId: number) => useQuery({
    queryKey: ['trailers', gameId],
    queryFn: trailersService(gameId).getAll
})

export default useTrailers