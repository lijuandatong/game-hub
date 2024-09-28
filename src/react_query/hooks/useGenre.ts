import useGenres from "./useGenres"

const useGenre = (id?: number) => {
    const {data: geners} = useGenres()
    return geners?.results.find(genre => genre.id === id)
}

export default useGenre