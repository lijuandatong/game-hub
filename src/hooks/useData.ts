import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import create from "../services/HttpService"
import HttpService from "../services/HttpService"

export interface FetchResponse<T> {
    count: number
    results: T[]
  }

const useData = <T>(endpoint: string) => {
    const [data, setGenres] = useState<T[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        const {request, cancel} = create(endpoint).getAll<FetchResponse<T>>()
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

    return {data, errors, isLoading}
}

export default useData