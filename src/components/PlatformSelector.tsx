import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatfroms'
import { Platform } from '../services/GameService'

interface Props {
    onSelectedPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
    const {data, errors} = usePlatforms()

    if(errors) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platfroms'}</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector