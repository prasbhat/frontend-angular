export interface TodoApplication {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    dueDate: Date;
    status: string;
    todoTaskCommentsSet: any[];
}
