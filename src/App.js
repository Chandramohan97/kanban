import "./App.css";
import React from "react";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    // <div className="app">
    <Heading
      fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
      fontWeight="bold"
      textAlign="center"
      mt="4"
    >
      Welcome to Kanban
    </Heading>
    // </div>
  );
}

export default App;
