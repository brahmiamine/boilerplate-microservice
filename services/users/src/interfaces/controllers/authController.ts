import { Request, Response } from "express";
import { TypeORMAuthRepository } from "../../infra/db/authRepository";
import { JWTAuthService } from "../../infra/services/authService";
import { RegisterUser } from "../../core/usecases/auth/registerUser";
import { LoginUser } from "../../core/usecases/auth/loginUser";


const authRepository = new TypeORMAuthRepository();
const authService = new JWTAuthService();

export const register = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const registerUser = new RegisterUser(authRepository, authService);
      const token = await registerUser.execute(email, password);
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };
  
  export const login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const loginUser = new LoginUser(authRepository, authService);
      const token = await loginUser.execute(email, password);
      res.status(200).json({ token });
  
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };
  