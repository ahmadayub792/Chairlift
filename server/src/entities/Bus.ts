import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import Ride from './Ride'
import { number } from "@hapi/joi";

@Entity()
export default class Bus {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column("simple-array")
  public route: number[];

  @Column("int")
  public capacity: number;

  @OneToMany(()=> Ride,(ride: Ride ) => ride.bus)
  public rides: Ride[];
}