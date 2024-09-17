import { Genre } from "../services/GenreService"
import useData from "./useData"

const useGenres = () => useData<Genre>('/genres')

export default useGenres