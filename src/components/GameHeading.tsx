import { Heading } from '@chakra-ui/react'
import useGenre from '../react_query/hooks/useGenre'
import usePlatform from '../react_query/hooks/usePlatform'
import useGameQueryStore from '../store'

const GameHeading = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    const selectGenre = useGenre(gameQuery.genreId)
    const selectPlatform = usePlatform(gameQuery.platformId)

    const heading = `${selectPlatform?.name || ''} ${selectGenre?.name || ''} Games`

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading