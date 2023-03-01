import { Box, Card, Flex, Text } from "@chakra-ui/react";

import React from 'react'
import KanbanCard from "../Card/KanbanCard";

const Board = () => {
  return (
    <Box flexDirection={"column"} border="1px solid black" height={"100%"} width="20vw" my="30vh" mx="10vw"  justifyContent={"space-around"} gap="20px" >
        <Text as="l" fontSize={"xl"} px="10px">New</Text>
        <KanbanCard priority="Low"/>
        <KanbanCard/>
    </Box>
  )
}

export default Board