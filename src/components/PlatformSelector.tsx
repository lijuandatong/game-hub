import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../react_query/hooks/usePlatform'
import usePlatforms from '../react_query/hooks/usePlatfroms'
import { Platform } from '../services/GameService'
import useGameQueryStore from '../store'

const PlatformSelector = () => {
    const {data, error} = usePlatforms()

    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)

    const selectedPlatform = usePlatform(selectedPlatformId)

    if(error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platfroms'}</MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector