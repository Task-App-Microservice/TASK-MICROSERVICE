import { Project } from "../entities/project.entity";

export interface ProjectProps{
    name: string,
    referenceExternalId: string
}
export interface CreateProjectRepository {
    save(data: ProjectProps, ownerId: number): Promise<Project>;
} 