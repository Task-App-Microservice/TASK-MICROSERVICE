import { Task } from "../../../task/domain/entities/task.entity";
import { User } from "../../../user/domain/entities/user.entity";
import { ProjectParticipant } from "./project-participant.entity";

export class Project {
    id: number;
    uuid: string;
    name: string;
    owner: User;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
    participants: ProjectParticipant[];
}