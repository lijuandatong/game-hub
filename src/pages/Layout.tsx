import { Box } from '@chakra-ui/react'
import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <div>
        <Box padding={5}>
            <NavBar />
            <Outlet />
        </Box>
    </div>
  )
}

export default Layout