import { AddressRepository } from '../../ports/address/AddresseRepository';
import { Address } from '../../domain/address/Address';

export class AddressUseCases {
    constructor(private addressRepository: AddressRepository) { }

    async addAddress(address: Address): Promise<Address> {
        return this.addressRepository.createAddress(address);
    }

    async getAllAddresses(): Promise<Address[]> {
        return this.addressRepository.getAllAddresses();
    }

    async getAddressesById(id: string): Promise<Address> {
        return this.addressRepository.getAddressesById(id);
    }

    async getAddressesByUserId(userId: string): Promise<Address[]> {
        return this.addressRepository.getAddressesByUserId(userId);
    }


    async updateAddress(address: Address): Promise<Address> {
        return this.addressRepository.updateAddress(address);
    }

    async deleteAddress(id: string): Promise<void> {
        await this.addressRepository.deleteAddress(id);
    }
}
