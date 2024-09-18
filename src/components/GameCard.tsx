import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../services/GameService'
import getCroppedImageUrl from '../services/ImageUrl'
import CriticScore from './CriticScore'
import PlatformIcons from './PlatformIcons'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIcons platforms={game.parent_platforms.map(platform => platform.platform)}></PlatformIcons>
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard