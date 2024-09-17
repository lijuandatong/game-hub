import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/ImageUrl'

const GenreList = () => {
    const {data, isLoading, errors} = useGenres()
    
    if(isLoading) return <Spinner></Spinner>

    if(errors) return null

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8}/>
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>
            ))}
        </List>
    )
}

export default GenreList