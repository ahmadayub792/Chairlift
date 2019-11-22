import User from "../entities/User";
import * as bcrypt from "bcrypt";
import { createUser } from "../repo/user";

export async function create(username: string, password: string): Promise<User> {
  const hashPass = await bcrypt.hash(password,10);
  const user = createUser(username, hashPass);
  
  return user;
}
