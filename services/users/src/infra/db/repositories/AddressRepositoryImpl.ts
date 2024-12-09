import { AddressRepository } from '../../../core/ports/address/AddresseRepository';
import { Address } from '../../../core/domain/address/Address';
import { AppDataSource } from "../../config/ormconfig";
import { AddressEntity } from '../entities/AddressEntity';

export class AddressRepositoryImpl implements AddressRepository {


    private addresseRepository = AppDataSource.getRepository(AddressEntity);


    async createAddress(address: Address): Promise<Address> {
        const newAddresse = this.addresseRepository.create(address);
        return await this.addresseRepository.save(newAddresse);
    }

    getAllAddresses(): Promise<Address[]> {
        return this.addresseRepository.find()
    }

    getAddressesById(id: string): Promise<Address> {
        return this.addresseRepository.findOne({ where: { id: id } });
    }

    getAddressesByUserId(userId: string): Promise<Address[]> {
        return this.addresseRepository.find({
            where: { user: { id: userId } },
            relations: ['user'],
        });
    }

    async updateAddress(address: Address): Promise<Address> {
        return await this.addresseRepository.save(address);
    }

    async deleteAddress(id: string): Promise<void> {
        try {
            const address = await this.addresseRepository.findOneOrFail({ where: { id } });
            await this.addresseRepository.remove(address);
        } catch (error) {
            throw new Error(`Impossible de supprimer l'adresse avec l'id ${id}`);
        }
    }


}
