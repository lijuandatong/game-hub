import { Grid, GridItem, Show, Text } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './services/GameService'
import { Genre } from './services/GenreService'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={
            (genre) => setSelectedGenre(genre)
            }/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platfom) => setSelectedPlatform(platfom)}></PlatformSelector>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  )
}

export default App
