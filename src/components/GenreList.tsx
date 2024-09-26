import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useGenres from '../react_query/hooks/useGenres'
import { Genre } from '../services/GenreService'
import getCroppedImageUrl from '../services/ImageUrl'

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenreId?: number
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
    const {data, isLoading, error} = useGenres()

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
                        <Button textAlign='left' whiteSpace='nomal' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
                ))}
            </List>
        </>  
    )
}

export default GenreList