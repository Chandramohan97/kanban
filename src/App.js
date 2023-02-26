import "./App.css";
import React from "react";
import { Contaibner, Heading, Text ,Input} from "@chakra-ui/react";
import TextArea from "./Components/TextArea/TextArea";
// import Column from "./Components/Column";
import Column from "./Components/Column.tsx";
import { ColumnType } from "./utils/column.ts";
import { SimpleGrid } from "@chakra-ui/react";
import { Grid,Box,Flex } from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
// import { Draggable } from "react-beautiful-dnd";
import { DndProvider, useDrag,useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {v4 as uuid4} from 'uuid';

const arr = [
  {
    id:Math.random(),
    content :'Hello'
  },
  {
    id:Math.random(),
    content : 'Not Hello'
  },
  {
    id:Math.random(),
    content : 'Goodbye'
  }
]
function App() {
  return(
    <DragDropContext>
      <Droppable droppableId="characters">
        {(provided) =>(
          <div className="app" {...provided.droppableProps} ref={provided.innerRef}>
          {arr.map(({id,content})=> {
          return(
            <Draggable key={id} draggableId={`draggable-${id}`}>
              {(provided)=>(     
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                  {content}
                  </li>
              )
              }
            </Draggable>
          )})}
          {provided.placeholder}
          </div>
          
        )}
        </Droppable>
      </DragDropContext>
    )
}

        // <Grid templateColumns="repeat(3, 20vw)"  gap={[4,8,12]} py={["10vh", "20vh"]}   px={["5vw", "10vw", "20vw"]}>
    //   <Box bg="gray.100" p={[2,4]} height="60vh" borderRadius="md" >
    //     <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> New </Text>
    //     <Flex direction="column" align="center" gap="4" my>
    //       <TextArea value="Board 1" />
    //       <TextArea value="Board 2" />
    //     </Flex>
    //   </Box>
    //   <Box bg="gray.100" p={[2,4]} borderRadius="md">
    //     <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> In Progress </Text>
    //     <Flex direction="column" align="center" gap="4" my>
    //       <TextArea value="Board 3" />
    //       <TextArea value="Board 4" /> 
    //     </Flex>
    //   </Box>
    //   <Box bg="gray.100" p={[2,4]} borderRadius="md">
    //   <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> Complete </Text>
    //   <Flex direction="column" align="center" gap="4" my>
    //       <TextArea value="Board 5" />
    //       <TextArea value="Board 6" />
    //   </Flex>
    //   </Box>
    // </Grid>

export default App;
