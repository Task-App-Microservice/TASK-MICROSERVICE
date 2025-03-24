import { Project } from "../entities/project.entity";
import { ProjectProps } from "../repositories/create-project.repository";

export interface CreateProjectService {
    save(data: ProjectProps, referenceExternalId: string): Promise<Project>;
} 