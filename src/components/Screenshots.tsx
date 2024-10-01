import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import useScreenshots from '../react_query/hooks/uesScreenshots'

interface Props {
    gameId: number
}
const Screenshots = ({gameId}: Props) => {
    const {data, isLoading, error} = useScreenshots(gameId)
    console.log(data)

    if(isLoading) return null
    
    if(error) throw error

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {data?.results.map(screenshot => <Image key={screenshot.id} src={screenshot.image} />)}
        </SimpleGrid>
    )
}

export default Screenshots