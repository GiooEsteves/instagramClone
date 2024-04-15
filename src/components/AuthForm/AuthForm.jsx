import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        nomeCompleto: '',
        nomedeUsuario: ''
    })
    const handleAuth = ()=>{
        if(!inputs.email || !inputs.password){
            alert("Por favor preencha todos os campos.")
            return
        }
        navigate("/")
    }
    return <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram'/>
                
                {isLogin ? <>
                <Input 
                    placeholder='Telefone, nome de usuário ou email'
                    fontSize={9}
                    type='email'
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs, email:e.target.value})}
                />
                <Input 
                    placeholder='Senha'
                    fontSize={9}
                    type='password'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password:e.target.value})}
                />
                </>: null}

                {!isLogin ? <>
                    <Input 
                    placeholder='Número do celular ou email'
                    fontSize={11}
                    type='email'
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs, email:e.target.value})}
                    />
                    <Input 
                    placeholder='Nome completo'
                    fontSize={11}
                    type='nomeCompleto'
                    value={inputs.nomeCompleto}
                    onChange={(e) => setInputs({...inputs, nomeCompleto:e.target.value})}
                    />
                    <Input 
                    placeholder='Nome de usuário'
                    fontSize={11}
                    type='nomedeUsuario'
                    value={inputs.nomedeUsuario}
                    onChange={(e) => setInputs({...inputs, nomedeUsuario:e.target.value})}
                    />
                    <Input 
                    placeholder='Senha'
                    fontSize={11}
                    type='password'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password:e.target.value})}
                    />
                </> : null}

                <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={handleAuth}>
                    {isLogin? "Entrar" : "Cadastre-se"}
                </Button>
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>              {/* ---------- */}
                    <Text mx={1} color={"gray"} fontSize={13}>OU</Text>        {/* OU */}
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>              {/* ---------- */}
                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src='/google.png' w={5} alt='Google logo'/>
                    <Text mx={"2"} color={"blue.500"}>Entrar com o Google</Text>
                </Flex>
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