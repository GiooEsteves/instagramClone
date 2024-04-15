import { Box, Flex, Link, Avatar, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/contants'
import { AiFillHome } from 'react-icons/ai'

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25}/>,
      text: "Página inicial",
      link: "/",
    },
    {
      icon:<SearchLogo/>,
      text: "Pesquisa"
    },
    {
      icon: <NotificationsLogo/>,
      text: "Notificações"
    },
    {
      icon: <CreatePostLogo/>,
      text: "Criar"
    },
    {
      icon: <Avatar size={"sm"} name='' src='/profilepic.png' />,
      text: "Perfil",
      link: "/perfil"
    }
  ]

  return <Box
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}  
    px={{base:2, md:4}}
  >
    <Flex direction={"column"} gap={10} w="full" height={"full"}>
      <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor="pointer">
        <InstagramLogo/>
      </Link>  
      
      <Link to={"/"} as={RouterLink} pl={2} display={{base:"block", md:"none"}} borderRadius={6} _hover={{bg:"whiteAlpha.200"}} 
        w={10} 
        cursor="pointer"
      >
        <InstagramMobileLogo/>
      </Link> 
      
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        {sidebarItems.mao((item, index) => (
              <Tooltip key={index} hasArrow label={item.text} placement='right' ml={1} openDelay={500} display={{base:'block', md: 'none'}}>
                <Link>
                  
                </Link>
            </Tooltip>
          ))}
      </Flex>
    </Flex>
  </Box>
}

export default Sidebar