import { GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import CriticScore from '../components/CriticScore'
import DefinitionItem from '../components/DefinitionItem'
import ExpandableText from '../components/ExpandableText'
import GameAttrubites from '../components/GameAttrubites'
import GameTrailer from '../components/GameTrailer'
import Screenshots from '../components/Screenshots'
import useGame from '../react_query/hooks/useGame'

const GameDetailPage = () => {
    const {slug} = useParams()
    const {data, isLoading, error} = useGame(slug!)

    if(isLoading) return <Spinner/>

    if(error || !data) throw 'error'

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
            <GridItem>
                <Heading>
                    {data.name}
                </Heading>
                <ExpandableText>
                    {data.description_raw}
                </ExpandableText>
                <GameAttrubites data={data}/>
            </GridItem>
            <GridItem>
                <GameTrailer gameId={data.id}/>
                <Screenshots gameId={data.id}/>
            </GridItem>
        </SimpleGrid>
    )
}

export default GameDetailPage