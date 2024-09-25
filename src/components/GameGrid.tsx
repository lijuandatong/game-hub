import { SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'
import useGames from '../react_query/hooks/useGames'
import { Platform } from '../services/GameService'
import { Genre } from '../services/GenreService'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const {data, error, isLoading} = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    if(error) return <Text>{error.message}</Text>

    return (
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding='10px' spacing={6}>
            {isLoading && skeletons.map(
                skeleton => 
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
                )}
            {data?.results.map(
                game => 
                <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                </GameCardContainer>
                )}
        </SimpleGrid>
    )
}

export default GameGrid