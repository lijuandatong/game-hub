import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import GenreService, { FetchGenresResponse, Genre } from "../services/GenreService"

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        const {request, cancel} = GenreService.getAll<FetchGenresResponse>()
        request.then(res => {
            setGenres(res.data.results)
            setLoading(false)
        })
        .catch(error => {
            if (error instanceof CanceledError) return
            setErrors(error.message)
            setLoading(false)
        })
        
        return () => cancel()

    }, [])

    return {genres, errors, isLoading}
}

export default useGenres