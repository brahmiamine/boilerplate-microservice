

import { AppDataSource } from "../config/ormconfig";
import { User } from "./entities/User";
import { UserRepository } from "../../core/ports/user/userRepository";

export class TypeORMUserRepository implements UserRepository {
  private userRepository = AppDataSource.getRepository(User);

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}

