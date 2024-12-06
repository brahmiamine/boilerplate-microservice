export interface AuthService {
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
    generateToken(payload: object): string;
    verifyToken(token: string): object | null;
  }
  