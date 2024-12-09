import { Address } from "../../domain/address/address";

export interface AddressRepository {
    createAddress(address: Address): Promise<Address>;
    getAddressesByUserId(id: string): Promise<Address[]>;
    updateAddress(address: Address): Promise<Address>;
    deleteAddress(id: number): Promise<void>;
}
