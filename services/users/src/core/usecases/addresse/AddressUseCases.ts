import { AddressRepository } from '../../ports/address/addresseRepository';
import { Address } from '../../domain/address/address';

export class AddressUseCases {
    constructor(private addressRepository: AddressRepository) { }

    async addAddress(address: Address): Promise<Address> {
        return this.addressRepository.createAddress(address);
    }

    async getAddressesByUserId(id: string): Promise<Address[]> {
        return this.addressRepository.getAddressesByUserId(id);
    }

    async updateAddress(address: Address): Promise<Address> {
        return this.addressRepository.updateAddress(address);
    }

    async deleteAddress(id: number): Promise<void> {
        await this.addressRepository.deleteAddress(id);
    }
}
