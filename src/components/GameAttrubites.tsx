import { SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Game from '../entities/Game'
import CriticScore from './CriticScore'
import DefinitionItem from './DefinitionItem'

interface Props{
    data: Game
}

const GameAttrubites = ({data}: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'> 
        <DefinitionItem term='Platforms'>
            {data.parent_platforms.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>

        <DefinitionItem term='Metascore'>
            <CriticScore score={data.metacritic}/>
        </DefinitionItem>

        <DefinitionItem term='Genres'>
            {data.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
        </DefinitionItem>

        <DefinitionItem term='Publishers'>
            {data.publishers.map((publisher) => <Text key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItem>
    </SimpleGrid>
  )
}

export default GameAttrubites