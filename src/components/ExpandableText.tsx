import React, { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

interface Props {
    children: string
}

const ExpandableText = ({ children }: Props) => {
    const [isExpanded, setExpanded] = useState(true)
    const max = 300

    if (!children) return null;

    if (children.length <= max) return <Text>{children}</Text>

    const summary = children.substring(0, max) + '...'

    return (
        <>
            <Text>
                {isExpanded ? summary : children} <Button size='xs' fontWeight='bold' colorScheme='yellow' marginLeft={1} onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Read More' : 'Read Less'}</Button>
            </Text>

        </>

    )
}

export default ExpandableText