import { Project } from "../entities/project.entity";

export interface ReadProjectRepository {
    findOneById(id: number): Promise<Project>;
} 