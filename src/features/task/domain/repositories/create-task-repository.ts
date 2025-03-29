import { Task } from "../entities/task.entity";
export interface TaskData{
    title: string;
    description?: string;
    userId: number;
    dueDate?: Date; 
    projectId: number;
}
export interface CreateTaskRepository{
    save(data: TaskData): Promise<Task>
} 