import { Request, Response } from "express";
import { TypeORMUserRepository } from "../../infra/db/userRepository";
import { GetAllUsers } from "../../core/usecases/user/getAllUsers";


const userRepository = new TypeORMUserRepository();

  export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const getAllUsersUseCase = new GetAllUsers(userRepository);
      const users = await getAllUsersUseCase.execute();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };