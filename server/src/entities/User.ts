import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column("text")
  public username: string;

  @Column("text", { select: false})
  public password: string;

}