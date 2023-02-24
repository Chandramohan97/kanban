import { Textarea as ChakraTextarea} from "@chakra-ui/react";

import React from 'react'

const TextArea = (props) => {
  return (
    <ChakraTextarea
     bg="white" 
     w="full" 
     h="20%" 
     border="1px" 
     my={4} 
     h="10vh" 
     borderRadius="none"
     {...props}
    />
  )
}

export default TextArea;