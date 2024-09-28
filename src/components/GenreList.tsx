import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useGenres from '../react_query/hooks/useGenres'
import { Genre } from '../services/GenreService'
import getCroppedImageUrl from '../services/ImageUrl'
import useGameQueryStore from '../store'

const GenreList = () => {
    const {data, isLoading, error} = useGenres()
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)

    if(isLoading) return <Spinner></Spinner>

    if(error) return null

    return (
        <>
            <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
            <List>
                {data?.results.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8}/>
                        <Button textAlign='left' whiteSpace='nomal' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} variant='link' fontSize='lg' onClick={() => setSelectedGenreId(genre.id)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
                ))}
            </List>
        </>  
    )
}

export default GenreList