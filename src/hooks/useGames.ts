import { useEffect, useState } from "react"
import { CanceledError } from "../services/api-client"
import gameService, { FetchGamesResponse, Game } from "../services/GameService"

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        const {request, cancel} = gameService.getAll<FetchGamesResponse>()
        request.then(res => {
            setGames(res.data.results)
            setLoading(false)
        })
        .catch(error => {
            if (error instanceof CanceledError) return
            setErrors(error.message)
            setLoading(false)
        })
        
        return () => cancel()

    }, [])

    return {games, errors}

}

export default useGames