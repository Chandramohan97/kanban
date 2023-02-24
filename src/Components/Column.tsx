import React from 'react'
import { AddIcon } from "@chakra-ui/icons";
import { ColumnType } from "../utils/column.ts";
import { TaskModel } from '../utils/model';
import { Badge, Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react';
import Task from './Task';
//  export enum ColumnType {
//        new="New",
//        in_Progress= "In Progress",
//       complete= "Completed",
//  };

const ColumnColorScheme: Record<ColumnType, string> = {
    [ColumnType.NEW]: "gray",
    [ColumnType.IN_PROGRESS]: "blue",
    [ColumnType.COMPLETE]: "green"
};

const mockTasks: TaskModel[] = [
    {
        id: '1',
        title: 'Task 1',
        column: ColumnType.NEW,
        color: 'red.300',
    },
    {
        id: '2',
        title: 'Task 2',
        column: ColumnType.IN_PROGRESS,
        color: 'blue.300'
    },
    {
        id: '3',
        title: 'Task 3',
        column: ColumnType.COMPLETE,
        color: 'green.300'

    }
]

function Column({ column }: { column: ColumnType }) {

    // const ColumnTasks = mockTasks.map((task, index) => {
    //     <Task key={task.id} task={task}></Task>
    // }
    // )
    return (
        <Box>
            <Heading fontSize="md" mb={4} letterSpacing="wide">
                <Badge
                    px={2}
                    py={1}
                    rounded="lg"
                    colorScheme={ColumnColorScheme[column]}
                >
                    {column}
                </Badge>
            </Heading>

            <IconButton size="xs"
                w="full"
                color={useColorModeValue('gray.500', 'gray.400')}
                bgColor={useColorModeValue('gray.100', 'gray.700')}
                _hover={{ bgColor: useColorModeValue('gray.200', '.gray.600') }}
                py={2}
                variant="solid"
                colorScheme="black"
                aria-label='add-task'
                icon={<AddIcon />}
            >
            </IconButton>
            <Stack
                direction={{ base: 'row', md: 'column' }}
                h={{ base: 300, md: 600 }}
                p={4}
                mt={2}
                spacing={4}
                bgColor={useColorModeValue('gray.500', 'gray.900')}
                rounded="lg"
                boxShadow="md"
                overflow="auto"
            >
                {/* {ColumnTasks} */}
            </Stack>

        </Box>
    );
}

export default Column;