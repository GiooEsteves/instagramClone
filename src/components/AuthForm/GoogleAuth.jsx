import React from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'

const GoogleAuth = () => {
  return <>
    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
        <Image src='/google.png' w={5} alt='Google logo'/>
        <Text mx={"2"} color={"blue.500"}>Entrar com o Google</Text>
    </Flex>
  </>
}

export default GoogleAuth