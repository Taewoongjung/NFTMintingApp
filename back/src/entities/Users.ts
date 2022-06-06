import {Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, Unique} from "typeorm";

@Index('id', ['id'], { unique: true })
@Entity({ schema: 'minting-page', name: 'users' })
@Unique(['seq'])
export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
    seq: number;

    @Column('varchar', { name: 'id', unique: true, length: 200 })
    id: string;

    @Column('varchar', { name: 'name', length: 20 })
    name: string;

    @Column('varchar', { name: 'email', length: 100 })
    email: string;

    @Column('varchar', { name: 'password', length: 255 })
    password: string;

    @CreateDateColumn({ name: 'createdAt', type: 'datetime' })
    createdAt: Date;

    @CreateDateColumn({ name: 'updatedAt', type: 'datetime' })
    updatedAt: Date;
}