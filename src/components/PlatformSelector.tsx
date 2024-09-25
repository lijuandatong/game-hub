import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../react_query/hooks/usePlatfroms'
import { Platform } from '../services/GameService'

interface Props {
    onSelectedPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
    const {data, error} = usePlatforms()

    if(error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platfroms'}</MenuButton>
            <MenuList>
                {data.results.map(platform => <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector