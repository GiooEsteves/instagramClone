import { Box, VStack, Image, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import GoogleAuth from './GoogleAuth'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)

    return <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram'/>
                {isLogin ? <Login/> : <Signup/>}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>              {/* ---------- */}
                    <Text mx={1} color={"gray"} fontSize={13}>OU</Text>        {/* OU */}
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>              {/* ---------- */}
                </Flex>
                <GoogleAuth/>
            </VStack>
        </Box>
        
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Não tem uma conta?": "Tem uma conta?"}
                </Box>
                <Box onClick={()=>setIsLogin(!isLogin)} color={"blue.400"} cursor={"pointer"}>
                    {isLogin ? "Cadastre-se": "Entrar"}
                </Box>
            </Flex>
        </Box> 
    </>
}

export default AuthForm