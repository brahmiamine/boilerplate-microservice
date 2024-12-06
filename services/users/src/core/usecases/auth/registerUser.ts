import { AuthService } from "../../ports/auth/authService";
import { AuthRepository } from "../../ports/auth/authRepository";

export class RegisterUser {
  constructor(private userRepo: AuthRepository, private authService: AuthService) {}

  async execute(email: string, password: string) {
    const existingUser = await this.userRepo.findByEmail(email);
    if (existingUser) throw new Error("Email already in use");

    const hashedPassword = await this.authService.hashPassword(password);
    const user = await this.userRepo.createUser({ email, password: hashedPassword });
    const { password: _, ...userWithoutPassword } = user;
    return this.authService.generateToken(userWithoutPassword);
  }
}
