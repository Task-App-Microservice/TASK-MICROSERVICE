import { ControlPagination, ResponsePagination } from "src/root/core/pagination.core";
import { Task } from "../entities/task.entity";

export interface ReadTaskService {
    findOne(uuid: string): Promise<Task>
    findAll(projectUuid: string, control: ControlPagination): Promise<ResponsePagination<Task[]>>
} 
