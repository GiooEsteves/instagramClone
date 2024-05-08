import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../../components/Navbar/Navbar'

const PageLayout = ({children}) => {
  const {pathname} = useLocation()
  const [user, loading, error] = useAuthState(auth)
  const canRenderSidebar = pathname !== '/auth' && user
  const canRenderNavbar = !user && !loading && pathname !== '/auth'

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
        {/* SIDEBAR */}
        {canRenderSidebar ? (
          <Box w={{base: "70px", md:"240px"}}>
            <Sidebar/>
          </Box>
        ) : null}
        {/* NAVBAR */}
        {canRenderNavbar ? <Navbar/> : null}
        {/* PAGE */}
        <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout