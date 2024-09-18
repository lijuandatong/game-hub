import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import useGames from '../hooks/useGames'
import { Platform } from '../services/GameService'
import { Genre } from '../services/GenreService'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    console.log(selectedGenre?.name)
    const {data, errors, isLoading} = useGames(selectedGenre, selectedPlatform)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacing={3}>
            {isLoading && skeletons.map(
                skeleton => 
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
                )}
            {data.map(
                game => 
                <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                </GameCardContainer>
                )}
        </SimpleGrid>
    )
}

export default GameGrid