import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../services/GameService'
import CriticScore from './CriticScore'
import PlatformIcons from './PlatformIcons'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    console.log(game.background_image)
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize='2xl'>
                    {game.name}
                </Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIcons platforms={game.parent_platforms.map(platform => platform.platform)}></PlatformIcons>
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard