import React from "react";
import { TaskModel } from "../utils/model";
import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface TaskProps {
    index: number,
    task: TaskModel
}

const Task = ({ index, task }: TaskProps) => {   //destructuring of properties.
    return (
        <Box
            as="div"
            role="group"
            rounded="lg"
            w="200"
            pl="3"
            pr="7"
            pt="3"
            pb="1"
            cursor="grab"
            bgColor={task.color}
        >
            <IconButton
                position="absolute"
                right="0"
                top="0"
                zIndex={100}
                aria-label="delete-task"
                size="md"
                colorScheme="solid"
                color="gray.700"
                icon={<DeleteIcon />}
                opacity="0"
                _groupHover={{
                    opacity: 1
                }}
            />
            <Textarea
                value={task.title}
                fontWeight="semibold"
                cursor="inherit"
                border="none"
                p="0"
                resize="none"
                minH="70"
                maxH="200"
                color="white"
            >
            </Textarea>
        </Box>
    );
}

export default Task;