import { Platfrom } from "../services/GameService"
import useData from "./useData"

const usePlatforms = () => useData<Platfrom>('/platforms/lists/parents')

export default usePlatforms