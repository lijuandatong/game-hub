import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../services/GameService'

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
            </CardBody>
        </Card>
    )
}

export default GameCard