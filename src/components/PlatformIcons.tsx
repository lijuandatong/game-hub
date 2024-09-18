import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../services/GameService'

interface Props {
    platforms: Platform[]
}

const PlatformIcons = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack marginY={1}>
            {platforms.map(platfom => <Icon key={platfom.id} as={iconMap[platfom.slug]} color='gray.500'>{platfom.name}</Icon>)}
        </HStack>
        
    )
}

export default PlatformIcons