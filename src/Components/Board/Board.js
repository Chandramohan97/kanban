import { Box, Card, Flex, Text } from "@chakra-ui/react";

import React from 'react'
import KanbanCard from "../Card/KanbanCard";

const Board = () => {
  return (
    <Flex flexDirection={"column"} border="1px solid black" height="100%" width="20vw" my="20vh" mx="10vw" justifyContent={"space-around"} gap="20px" >
        <Text fontSize={"xl"} mx="12px">New</Text>
        <KanbanCard priority="Low" />
        <KanbanCard priority="Low" />
    </Flex>
  )
}

export default Board