import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../react_query/hooks/usePlatfroms'
import { Platform } from '../services/GameService'

interface Props {
    onSelectedPlatform: (platform: Platform) => void
    selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatformId }: Props) => {
    const {data, error} = usePlatforms()
    const selectedPlatform = data?.results.find(platform => platform.id === selectedPlatformId)

    if(error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platfroms'}</MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector