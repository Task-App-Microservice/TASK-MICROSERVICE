import { Project } from "../entities/project.entity";

export interface ReadProjectService {
    findOneById(id: number): Promise<Project>;
} 