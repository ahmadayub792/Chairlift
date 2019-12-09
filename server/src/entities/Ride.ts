import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm"
import Bus from "./Bus";
import User from "./User";

@Entity()
export default class Ride{
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column("text")
    public status: string;

    @ManyToOne(() => Bus, (bus: Bus) => bus.rides)
    public bus: Bus;

    @ManyToMany(() => User, (user: User) => user.rides)
    public users: User[];
}