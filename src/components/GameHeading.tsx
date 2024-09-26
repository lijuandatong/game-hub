import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'
import useGenres from '../react_query/hooks/useGenres'
import usePlatforms from '../react_query/hooks/usePlatfroms'

interface Props {
    gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Props) => {
    const {data: geners} = useGenres()
    const selectGenre = geners?.results.find(genre => genre.id === gameQuery.genreId)

    const {data: platforms} = usePlatforms()
    const selectPlatform = platforms?.results.find(platform => platform.id === gameQuery.platformId)

    const heading = `${selectPlatform?.name || ''} ${selectGenre?.name || ''} Games`

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading