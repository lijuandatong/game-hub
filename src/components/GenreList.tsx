import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useGenres from '../hooks/useGenres'
import { Genre } from '../services/GenreService'
import getCroppedImageUrl from '../services/ImageUrl'

interface Props {
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
    const {data, isLoading, errors} = useGenres()

    if(isLoading) return <Spinner></Spinner>

    if(errors) return null

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8}/>
                    <Button variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
            </ListItem>
            ))}
        </List>
    )
}

export default GenreList