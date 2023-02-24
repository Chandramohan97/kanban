import "./App.css";
import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import TextArea from "./Components/TextArea/TextArea";
// import Column from "./Components/Column";
import Column from "./Components/Column.tsx";
import { ColumnType } from "./utils/column.ts";
import { SimpleGrid } from "@chakra-ui/react";
import { Grid,Box,Flex } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateColumns="repeat(3, 20vw)"  gap={[4,8,12]} py={["10vh", "20vh"]}   px={["5vw", "10vw", "20vw"]}>
      <Box bg="gray.100" p={[2,4]} height="60vh" borderRadius="md" >
        <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> New </Text>
        <Flex direction="column" align="center" gap="4" my>
          <TextArea value="Board 1" />
          <TextArea value="Board 2" />
        </Flex>
      </Box>
      <Box bg="gray.100" p={[2,4]} borderRadius="md">
        <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> In Progress </Text>
        <Flex direction="column" align="center" gap="4" my>
          <TextArea value="Board 3" />
          <TextArea value="Board 4" /> 
        </Flex>
      </Box>
      <Box bg="gray.100" p={[2,4]} borderRadius="md">
      <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> Complete </Text>
      <Flex direction="column" align="center" gap="4" my>
          <TextArea value="Board 5" />
          <TextArea value="Board 6" />
      </Flex>
      </Box>
    </Grid>
  );
    
   
}

export default App;
