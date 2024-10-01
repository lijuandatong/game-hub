import { useQuery } from "@tanstack/react-query"
import screenshotsService from "../services/screenshotsService"

const useScreenshots = (gameId: number) => useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: screenshotsService(gameId).getAll
})

export default useScreenshots