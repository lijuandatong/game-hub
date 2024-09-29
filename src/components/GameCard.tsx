import { Card, CardBody, Heading, HStack, Image, LinkOverlay, transition } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { Game } from '../services/GameService'
import getCroppedImageUrl from '../services/ImageUrl'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIcons from './PlatformIcons'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card _hover={{
            transform: 'scale(1.03)',
            transition: 'transform .15s ease-in' // make the animation more smooth
        }}>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIcons platforms={game.parent_platforms.map(platform => platform.platform)}></PlatformIcons>
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={'/games/' + game.slug}>{game.name}</Link>
                    <Emoji rating={game.rating_top}/>
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard