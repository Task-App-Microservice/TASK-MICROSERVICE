import { ControlPagination, ResponsePagination } from "src/root/core/pagination.core";
import { Task } from "../entities/task.entity";

export interface ReadTaskService {
    findAll(projectUuid: string, control: ControlPagination): Promise<ResponsePagination<Task[]>>
} 
