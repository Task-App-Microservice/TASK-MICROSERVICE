import { User } from "../../../user/domain/entities/user.entity"
import { Project } from "./project.entity"

export class ProjectParticipant{
    id: number
    user: User
    userId: number
    project: Project
    projectId: number
  
    createdAt: Date
}