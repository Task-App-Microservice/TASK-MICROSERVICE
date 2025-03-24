import { Project } from "../../../project/domain/entities/project.entity";
import { User } from "../../../user/domain/entities/user.entity";

export class Task{
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    priority: "LOW" | "MEDIUM" | "HIGH";
    status: "PENDING" | "IN_PROGRESS" | "DONE";
    createdAt: Date;
    updatedAt: Date;
    user: User;
    project: Project;
}