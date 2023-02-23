import "./App.css";
import React from "react";
import { Container, Heading, Text, Textarea } from "@chakra-ui/react";
// import Column from "./Components/Column";
import Column from "./Components/Column.tsx";
import { ColumnType } from "./utils/column.ts";
import { SimpleGrid } from "@chakra-ui/react";
import { Grid,Box,Flex } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateColumns="repeat(3, 20vw)"  gap={[4,8,12]} py="20vh" px="20vw">
      <Box bg="gray.100" p={[2,4]} height="60vh" borderRadius="md" >
        <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> New </Text>
        <Flex direction="column" align="center" gap="4" my>
          <Textarea bg="white" w="full" h="20%" border="1px" my={4} h="10vh" borderRadius="none">
            Board 1
          </Textarea>
          <Textarea bg="white" w="full" h="20%" border="1px" my={4} h="10vh" borderRadius="none">
            Board 3
          </Textarea>
        </Flex>
      </Box>
      <Box bg="gray.100" p={[2,4]} borderRadius="md">
        <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> In Progress </Text>

        <Flex direction="column" align="center" gap="4" my>
          <Textarea bg="white" w="full" h="20%" border="1px" my={4} h="10vh" borderRadius="none">
            Board 1
          </Textarea>
          <Textarea bg="white" w="full" h="20%" border="1px" my={4} h="10vh" borderRadius="none">
            Board 3
          </Textarea>
        </Flex>

      </Box>
      <Box bg="gray.100" p={[2,4]} borderRadius="md">
      <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> Complete </Text>
      <Flex direction="column" align="center" gap="4" my>
        <Textarea bg="white" w="full" h="20%" border="1px" my={4} h="10vh" borderRadius="none">
            Board 1
          </Textarea>
          <Textarea bg="white" w="full" h="20%" border="1px" my={4} h="10vh" borderRadius="none">
            Board 3
          </Textarea>
        </Flex>

      </Box>
    </Grid>
  );
    
   
}

export default App;
