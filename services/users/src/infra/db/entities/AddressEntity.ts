import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity("addresses")
export class AddressEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column()
    country: string;

    @Column({ nullable: true })
    zipCode: string;

    @Column()
    userId: string;

}
