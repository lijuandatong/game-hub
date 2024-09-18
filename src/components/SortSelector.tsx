import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    selectedSortOrder: string | null
    onSelectedSortOrder: (sortOrder: string) => void
}

const SortSelector = ({ selectedSortOrder, onSelectedSortOrder}: Props) => {
    const sortOrders = [
        {value: '', lable: 'Relevance'},
        {value: '-added', lable: 'Data added'},
        {value: 'name', lable: 'Name'},
        {value: '-released', lable: 'Release added'},
        {value: '-metacritic', lable: 'Popularity'},
        {value: '-rating', lable: 'Average rating'},
    ]

    const sort = sortOrders.find(s => s.value === selectedSortOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {sort?.lable || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(sortOrder => <MenuItem key={sortOrder.value} onClick={() => onSelectedSortOrder(sortOrder.value)}>{sortOrder.lable}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector