import { UserRepository } from "../../ports/user/userRepository";
import { User } from "../../domain/user/user";

export class GetAllUsers {
  constructor(private userRepo: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepo.getAllUsers();
  }
}
