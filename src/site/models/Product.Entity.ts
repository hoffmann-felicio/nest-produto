import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    nome: string;

    @Column()
    valor: number;
}