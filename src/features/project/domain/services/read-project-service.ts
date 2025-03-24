import { ControlPagination, ResponsePagination } from "src/root/core/pagination.core";
import { Project } from "../entities/project.entity";

export interface ReadProjectService {
    findOneById(id: number): Promise<Project>;
    findOneByUuid(uuid: string): Promise<Project>;
    findAllByExternalId(userId: string, control: ControlPagination): Promise<ResponsePagination<Project[]>>
} 