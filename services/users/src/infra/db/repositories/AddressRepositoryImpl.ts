import { AddressRepository } from '../../../core/ports/address/addresseRepository';
import { Address } from '../../../core/domain/address/address';
import { AppDataSource } from "../../config/ormconfig";
import { AddressEntity } from '../entities/AddressEntity';

export class AddressRepositoryImpl implements AddressRepository {
    getAddressesByUserId(id: string): Promise<Address[]> {
        throw new Error('Method not implemented.');
    }
    updateAddress(address: Address): Promise<Address> {
        throw new Error('Method not implemented.');
    }
    deleteAddress(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    private addresseRepository = AppDataSource.getRepository(AddressEntity);

    async createAddress(address: Address): Promise<Address> {
        const newAddresse = this.addresseRepository.create(address);
        return await this.addresseRepository.save(newAddresse);
    }


}
