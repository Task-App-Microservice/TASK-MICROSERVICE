import { ControlPagination, ResponsePagination } from "src/root/core/pagination.core";
import { Project } from "../entities/project.entity";


export interface ReadProjectRepository {
    findOneById(id: number): Promise<Project>;
    findOneByUuid(uuid: string): Promise<Project>;
    findAllByExternalId(userId: number, control: ControlPagination): Promise<ResponsePagination<Project[]>>
} 