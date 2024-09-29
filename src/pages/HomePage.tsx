import { Box, Grid, GridItem, Show, HStack } from '@chakra-ui/react'
import React from 'react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import NavBar from '../components/NavBar'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
    return (
        <Grid templateAreas={{
          base: `"main"`,
          lg: `"aside main"` // 1024px
        }}
        templateColumns={{
          base: '1fr', // 1fr: 1 fragment 占满所有的剩余空间
          lg: '200px 1fr'
        }}
        >
          <Show above='lg'>
            <GridItem area="aside" paddingX={5}>
              <GenreList/>
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <GameHeading />
              <HStack spacing={5} marginBottom={5}>
                <PlatformSelector/>
                <SortSelector />
              </HStack>
            </Box>
            <GameGrid />
          </GridItem>
        </Grid>
      )
}

export default HomePage