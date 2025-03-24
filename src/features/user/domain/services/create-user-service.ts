import { User } from "../entities/user.entity";
import { CreateUserData } from "../repositories/create-user-repository";

export interface CreateUserService{
    create(data: CreateUserData): Promise<User>
}