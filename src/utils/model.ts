import { ColumnType } from "./column";

export interface TaskModel{
    id : string,
    title : string, 
    column : ColumnType,
    color : string,
}
