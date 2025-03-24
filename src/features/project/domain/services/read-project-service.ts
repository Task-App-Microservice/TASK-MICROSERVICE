import { Project } from "../entities/project.entity";
import { ControlPagination, ResponsePagination } from "../repositories/read-project.repository";

export interface ReadProjectService {
    findOneById(id: number): Promise<Project>;
    findAllByExternalId(userId: string, control: ControlPagination): Promise<ResponsePagination<Project[]>>
} 