import React from 'react'
import { Button, Card, CardHeader,CardBody,Text} from '@chakra-ui/react'


const KanbanCard = (props) => {
  return (
    <Card border={"1px solid"} width="80%" mx="5%" flexDirection={"column"} alignItems="flex-start">
        <CardHeader flexDirection={"column"} alignItems="left">
            <Button position="relative" fontSize="13px" left="-10px" top="-20px" width="20px" borderRadius="40px" height="20px" background="green.200" my="-20px">{props.priority}</Button>
            <CardBody position={"relative"} left="-25px" top="-20px">
              <Text fontSize={"m"} width={"90%"}/>This is a nex text
            </CardBody>
        </CardHeader>
    </Card>
  )
}

export default KanbanCard