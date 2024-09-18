import { Grid, GridItem, Show, Text } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './services/GameService'
import { Genre } from './services/GenreService'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null
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
        <NavBar></NavBar>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={
            (genre) => setGameQuery({...gameQuery, genre})
            }/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatformSelector>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
