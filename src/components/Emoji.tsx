import { Image, ImageProps } from '@chakra-ui/react'
import meh from '../assets/meh.jpeg'
import thumsUp from '../assets/thumbsUp.jpg'
import bullsEye from '../assets/bullsEye.jpeg'

interface Props {
    rating: number
}

const Emoji = ({ rating }: Props) => {
    const emojiMap: { [key: number]: ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize: '25px'},
        4: {src: thumsUp, alt: 'recommended', boxSize: '25px'},
        5: {src: bullsEye, alt: 'exceptional', boxSize: '35px'},
    }
        

    return (
        <Image {...emojiMap[rating]}/>
    )
}

export default Emoji