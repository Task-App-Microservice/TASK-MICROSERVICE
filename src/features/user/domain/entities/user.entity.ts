import { Project } from "../../../project/domain/entities/project.entity";

export class User {
    id: number;
    uuid: string;
    referenceExternalId: string;
    projects?: Project[];
}