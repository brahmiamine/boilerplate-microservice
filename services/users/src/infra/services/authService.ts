import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthService } from "../../core/ports/auth/authService";

export class JWTAuthService implements AuthService {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  generateToken(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
  }

  verifyToken(token: string): JwtPayload | null {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      if (typeof payload === "object" && payload !== null) {
        return payload as JwtPayload;
      }
      return null;
    } catch {
      return null;
    }
}}