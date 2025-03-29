import { ControlPagination, ResponsePagination } from "src/root/core/pagination.core";
import { Task } from "../entities/task.entity";

export interface ReadTaskRepository {
    findByUid(uuid: string): Promise<Task>
    findAllByProjectId(projectId: number, control: ControlPagination): Promise<ResponsePagination<Task[]>>
} 
