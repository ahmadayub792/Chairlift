import {Entity, PrimaryGeneratedColumn,Column } from "typeorm"

@Entity()
export default class Bus {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column("simple-json")
}