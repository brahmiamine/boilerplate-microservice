import { User } from "../../domain/user/user";

export interface AuthRepository {
  createUser(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;

}
