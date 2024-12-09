export interface Address {
    id?: string;
    userId: string;
    street: string;
    city: string;
    state?: string;
    country: string;
    zipCode?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
