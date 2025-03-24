import { User } from "../entities/user.entity";

export interface CreateUserData{
    referenceExternalId: string;
}

export interface CreateUserRepository{
    save(data: CreateUserData): Promise<User>
}