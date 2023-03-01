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
import Board from "./Components/Board/Board";

function App() {
  return(
    // <DragDropContext>
    // <DragDropContext     
    <div className="app" >
      <Board/>
      <Board/>
    </div>     

   
  )
   
}

   
export default App;

