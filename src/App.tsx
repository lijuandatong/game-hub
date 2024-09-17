import { Grid, GridItem, Show, Text } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'

function App() {
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
