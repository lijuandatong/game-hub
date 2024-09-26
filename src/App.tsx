import { Box, Grid, GridItem, HStack, Show, Text } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import { Platform } from './services/GameService'
import { Genre } from './services/GenreService'

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // 1024px
    }}
    templateColumns={{
      base: '1fr', // 1fr: 1 fragment 占满所有的剩余空间
      lg: '200px 1fr'
    }}
    >
      <GridItem area="nav">
        <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})}></NavBar>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={
            (genre) => setGameQuery({...gameQuery, genreId: genre.id})
            }/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={ gameQuery }/>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}></PlatformSelector>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectedSortOrder={(sortOrder) => {setGameQuery({...gameQuery, sortOrder})}}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
