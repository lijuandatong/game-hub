import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GameGrid = () => {
    const {games, errors} = useGames()
    console.log(games)

    return (
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacing={10}>
            {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
        </SimpleGrid>
    )
}

export default GameGrid