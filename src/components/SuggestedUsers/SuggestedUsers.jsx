import { Box, Flex, Text, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return <VStack py={8} px={6} gap={4}>
    <SuggestedHeader/>
    
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
        Sugestões para você
      </Text>
      <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
        Ver tudo
      </Text>
    </Flex>
    <SuggestedUser name='Mike Abrhomovic' followers='1392' avatar=''/>
    <SuggestedUser name='Tank Evans' followers='543' avatar=''/>
    <SuggestedUser name='Buzz Aldrin' followers='780' avatar=''/>
    <Box alignSelf={"start"} fontSize={14}>
      © 2024 Built By{" "}
      <Link href='https://github.com/GiooEsteves' target='_blank' color='gray' fontSize={14}>
        Giovanna Esteves
			</Link>
    </Box>
  </VStack>
}

export default SuggestedUsers