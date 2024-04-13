import {Box, Container, Flex, Image, VStack} from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () =>{
  return(
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}> 
        <Container maxW={"container.md"} padding={0}>
            {/* LADO ESQUERDO */}
            <Box display={{base:"none", md:"block"}}>
                <Image src="/auth.png" h={650} alt='Phone img'/>
            </Box>
            {/* LADO DIREITO */}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm>
                    
                </AuthForm>
            </VStack>
        </Container>    
    </Flex>
  )
}

export default AuthPage