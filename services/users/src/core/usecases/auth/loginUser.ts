import { AuthService } from "../../ports/auth/authService";
import { AuthRepository } from "../../ports/auth/authRepository";

export class LoginUser {
  constructor(private userRepo: AuthRepository, private authService: AuthService) {}

  async execute(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const isPasswordValid = await this.authService.comparePassword(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid credentials");

    const { password: _, ...userWithoutPassword } = user;

    return this.authService.generateToken(userWithoutPassword);
  
  }
}
