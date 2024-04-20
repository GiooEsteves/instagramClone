import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4, sm:10}} py={10} direction={{base:"column", sm:"row"}}>
      <AvatarGroup size={{base:"xl", md:"2xl"}} justifyContent={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar name='Perfil base' src='/profilepic.png' alt='Perfil logo'/>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={6} direction={{base:"column", sm:"row"}} justifyContent={{base:"center", sm:"flex-start"}} alignItems={"center"} w={"full"}>
          <Text fontSize={{base:"sm", md:"lg"}}> 
            Perfil
          </Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"gray.800"} color={"white"} _hover={{bg:"gray.700"}} size={{base:"xs", md:"sm"}}>
              Editar perfil
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{base:6, sm:8}}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
            publicações
          </Text>

          <Text>
          <Text as="span" fontWeight={"bold"} mr={1}>190</Text>
            seguidores
          </Text>
          
          <Text>
          <Text as="span" fontWeight={"bold"} mr={1}>205</Text>
            seguindo
          </Text>
        </Flex>
        
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>Perfil</Text>
        </Flex>
        <Text fontSize={"sm"}>
          Bio do instagram
        </Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader