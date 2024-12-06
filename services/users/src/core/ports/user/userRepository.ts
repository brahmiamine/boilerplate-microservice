import { User } from "../../domain/user/user";

export interface UserRepository {
  getAllUsers(): Promise<User[]>; // Nouvelle méthode ajoutée

}
