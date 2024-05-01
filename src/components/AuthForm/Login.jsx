import { Input, Button } from '@chakra-ui/react'
import React, {useState} from 'react'

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

  return <>
    <Input 
        placeholder='Telefone, nome de usuário ou email'
        fontSize={9}
        type='email'
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, email:e.target.value})}
    />
    <Input 
        placeholder='Senha'
        fontSize={9}
        type='password'
        value={inputs.password}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, password:e.target.value})}
    />
    
    <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}>
        Entrar
    </Button>
  </>
}

export default Login