import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import Ride from "./Ride";

@Entity()
export default class User {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column("text")
  public username: string;

  @Column("text", { select: false})
  public password: string;

  @Column("text")
  public status: string;

  @ManyToMany(() => Ride, (ride: Ride) => ride.users)
  @JoinTable()
  public rides: Ride[]

}