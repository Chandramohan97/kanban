import React from 'react'
import { Button, Card, CardHeader,CardBody} from '@chakra-ui/react'


const KanbanCard = (props) => {
  return (
    <Card border={"1px solid"} width="60%" mx="5%" flexDirection={"column"} alignItems="flex-start">
        <CardHeader>
            <Button height="20px" background={"green.200"} my="-20px">{props.priority}</Button>
            <CardBody>h</CardBody>
        </CardHeader>
    </Card>
  )
}

export default KanbanCard