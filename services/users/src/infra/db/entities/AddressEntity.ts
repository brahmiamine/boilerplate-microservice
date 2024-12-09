import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity("addresses")
export class AddressEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

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

    @ManyToOne(() => User, (user) => user.addresses, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' }) // Correspond à la colonne user_id dans la table
    user: User;

    @Column({ type: 'uuid' })
    userId: string; // Clé étrangère

}
