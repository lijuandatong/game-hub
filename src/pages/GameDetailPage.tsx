import { Heading, Spinner, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import CriticScore from '../components/CriticScore'
import DefinitionItem from '../components/DefinitionItem'
import ExpandableText from '../components/ExpandableText'
import GameAttrubites from '../components/GameAttrubites'
import useGame from '../react_query/hooks/useGame'

const GameDetailPage = () => {
    const {slug} = useParams()
    const {data, isLoading, error} = useGame(slug!)

    if(isLoading) return <Spinner/>

    if(error || !data) throw 'error'

    return (
        <>
            <Heading>
                {data.name}
            </Heading>
            <ExpandableText>
                {data.description_raw}
            </ExpandableText>
            <GameAttrubites data={data}/>
        </>
    )
}

export default GameDetailPage