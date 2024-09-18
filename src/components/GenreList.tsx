import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useGenres from '../hooks/useGenres'
import { Genre } from '../services/GenreService'
import getCroppedImageUrl from '../services/ImageUrl'

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const {data, isLoading, errors} = useGenres()

    if(isLoading) return <Spinner></Spinner>

    if(errors) return null

    return (
        <>
            <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
            <List>
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8}/>
                        <Button textAlign='left' whiteSpace='nomal' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
                ))}
            </List>
        </>  
    )
}

export default GenreList