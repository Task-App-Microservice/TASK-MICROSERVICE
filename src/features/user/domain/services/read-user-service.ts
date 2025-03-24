import { User } from "../entities/user.entity";

export interface ReadUserService{
    findOne(referenceExternalId: string): Promise<User>
}