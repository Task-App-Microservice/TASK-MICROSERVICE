import { User } from "../entities/user.entity";



export interface ReadUserRepository{
    findOneByReferenceExternalId(referenceExternalId: string): Promise<User>
}