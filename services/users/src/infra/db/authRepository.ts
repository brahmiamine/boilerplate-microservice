import { AppDataSource } from "../config/ormconfig";
import { User } from "./entities/User";
import { AuthRepository } from "../../core/ports/auth/authRepository";

export class TypeORMAuthRepository implements AuthRepository {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ email });
  }
}
