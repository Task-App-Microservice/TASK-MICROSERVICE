import { Project } from "../entities/project.entity";

export interface ControlPagination {
    page: number,
    limit: number,
}

export interface ResponsePagination<T> {
    results: T,
    meta: {
        total: number,
        page: number,
    }
}
export interface ReadProjectRepository {
    findOneById(id: number): Promise<Project>;
    findAllByExternalId(userId: number, control: ControlPagination): Promise<ResponsePagination<Project[]>>
} 