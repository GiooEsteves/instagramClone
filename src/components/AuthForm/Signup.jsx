import React, { useState } from 'react'
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'

const Signup = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        nomeCompleto: '',
        nomedeUsuario: ''
    })

    const [showPassword, setShowPassword] = useState(false) 
    const {loading, error, signup} = useSignUpWithEmailAndPassword()

  return <>
    <Input 
        placeholder='Número do celular ou email'
        fontSize={11}
        type='email'
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, email:e.target.value})}
    />
    <Input 
        placeholder='Nome completo'
        fontSize={11}
        type='nomeCompleto'
        value={inputs.nomeCompleto}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, nomeCompleto:e.target.value})}
    />
    <Input 
        placeholder='Nome de usuário'
        fontSize={11}
        type='nomedeUsuario'
        size={"sm"}
        value={inputs.nomedeUsuario}
        onChange={(e) => setInputs({...inputs, nomedeUsuario:e.target.value})}
    />

    <InputGroup>
        <Input 
            placeholder='Senha'
            fontSize={11}
            type= {showPassword ? "text" : "password"}
            value={inputs.password}
            size={"sm"}
            onChange={(e) => setInputs({...inputs, password:e.target.value})}
        />
        <InputRightElement h={"full"}>
            <Button variant={"ghost"} size={"sm"} onClick={()=> setShowPassword(!showPassword)}>
                {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
            </Button>
        </InputRightElement>
    </InputGroup>
    
    {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
        </Alert>
    )}

    <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} isLoading={loading} onClick={()=> signup(inputs)}>
        Cadastre-se
    </Button>
  </>
}

export default Signup