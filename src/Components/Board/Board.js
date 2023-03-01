import { Box, Card, Flex, Text } from "@chakra-ui/react";

import React from 'react'
import KanbanCard from "../Card/KanbanCard";

const Board = () => {
  return (
    <Box flexDirection={"column"} border="1px solid black" height={"100%"} width="20vw">
        <Text as="l" fontSize={"xl"} px="10px">New</Text>
        <KanbanCard/>
        {/* <KanbanCard/> */}
    </Box>
  )
}

export default Board