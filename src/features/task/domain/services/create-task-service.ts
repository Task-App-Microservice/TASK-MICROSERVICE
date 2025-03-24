import { Task } from "../entities/task.entity";
import { TaskData } from "../repositories/create-task-repository";

export interface CreateTaskService{
    create(data: TaskData, referenceExternalId: string): Promise<Task>
} 