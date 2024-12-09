import { Request, Response } from 'express';
import { AddressUseCases } from '../../core/usecases/addresse/AddressUseCases';
import { AddressRepositoryImpl } from '../../infra/db/repositories/AddressRepositoryImpl';


const addreseRepository = new AddressRepositoryImpl();

export const addAddress = async (req: Request, res: Response) => {
    try {
        const getAllUsersUseCase = new AddressUseCases(addreseRepository);
        const users = await getAllUsersUseCase.addAddress(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

