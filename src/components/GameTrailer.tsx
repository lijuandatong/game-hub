import React from 'react'
import useTrailers from '../react_query/hooks/useTrailers'

interface Props {
    gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
    const {data, isLoading, error} = useTrailers(gameId)
    console.log(data)

    if(isLoading) return null

    if(error) throw error

    const first = data?.results[0]
    if(!first) return null

    return (
        <video 
            src={first.data[480]}
            poster={first.preview}
            controls />
    )
}

export default GameTrailer