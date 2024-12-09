export interface Address {
    id?: number;
    userId: string;
    street: string;
    city: string;
    state?: string;
    country: string;
    zipCode?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
