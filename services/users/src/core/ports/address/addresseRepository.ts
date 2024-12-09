import { Address } from "../../domain/address/Address";

export interface AddressRepository {
    createAddress(address: Address): Promise<Address>;
    getAllAddresses(): Promise<Address[]>;
    getAddressesByUserId(userId: string): Promise<Address[]>;
    getAddressesById(id: string): Promise<Address>;
    updateAddress(address: Address): Promise<Address>;
    deleteAddress(id: string): Promise<void>;
}
