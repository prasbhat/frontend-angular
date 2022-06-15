export interface TodoApplication {
    systemTasksId: number;
    title: string;
    description: string;
    creationDate: Date;
    dueDate: Date;
    status: string;
    todoTaskCommentsSet: any[];
}
