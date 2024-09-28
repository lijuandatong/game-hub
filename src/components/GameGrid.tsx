import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useGames from '../react_query/hooks/useGames'
import useGameQueryStore from '../store'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {

    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    const fetchedGamesCount = data?.pages.reduce(
        (total, page) => total + page.results.length, 0
        ) || 0

    if(error) return <Text>{error.message}</Text>

    return (
        <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={6} padding='10px'>
                {isLoading && skeletons.map(
                    skeleton => 
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                    )}
                {data?.pages.map((page, index) => 
                    <React.Fragment key={index}>
                        {page.results.map(
                            game => 
                            <GameCardContainer key={game.id}>
                                <GameCard game={game}></GameCard>
                            </GameCardContainer>
                    )}
                    </React.Fragment>
                )}
            </SimpleGrid>
        </InfiniteScroll>
            
    )
}

export default GameGrid