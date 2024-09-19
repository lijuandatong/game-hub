import { Platform } from "../services/GameService"
import platforms from "../data/platforms"

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
const usePlatforms = () => ({data: platforms, isLoading: false, errors: null})

export default usePlatforms