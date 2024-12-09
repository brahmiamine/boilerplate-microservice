import { Request, Response } from 'express';
import { AddressUseCases } from '../../core/usecases/addresse/AddressUseCases';
import { AddressRepositoryImpl } from '../../infra/db/repositories/AddressRepositoryImpl';


const addreseRepository = new AddressRepositoryImpl();

export const addAddress = async (req: Request, res: Response) => {
    try {
        const adresseUseCase = new AddressUseCases(addreseRepository);
        const users = await adresseUseCase.addAddress(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getAddressesByUserId = async (req: Request, res: Response) => {
    try {
        const adresseUseCase = new AddressUseCases(addreseRepository);
        const users = await adresseUseCase.getAddressesByUserId(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};



export const getAllAddresses = async (req: Request, res: Response) => {
    try {
        const adresseUseCase = new AddressUseCases(addreseRepository);
        const users = await adresseUseCase.getAllAddresses()
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getAddressesById = async (req: Request, res: Response) => {
    try {
        const adresseUseCase = new AddressUseCases(addreseRepository);
        const users = await adresseUseCase.getAddressesById(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteAddressById = async (req: Request, res: Response) => {
    try {
        const adresseUseCase = new AddressUseCases(addreseRepository);
        const users = await adresseUseCase.deleteAddress(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateAddress = async (req: Request, res: Response) => {
    try {
        const adresseUseCase = new AddressUseCases(addreseRepository);
        const users = await adresseUseCase.updateAddress(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

