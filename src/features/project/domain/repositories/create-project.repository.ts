import { Project } from "../entities/project.entity";

export interface ProjectProps{
    name: string
}
export interface CreateProjectRepository {
    save(data: ProjectProps, ownerId: number): Promise<Project>;
} 