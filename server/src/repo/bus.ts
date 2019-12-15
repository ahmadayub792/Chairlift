import { getConnection } from "typeorm";
import Bus from "../entities/Bus";

export async function list(offset: number, limit: number): Promise<[number, any[]]> {
  const busRepo = getConnection().getRepository(Bus);
  const [rows, count] = await busRepo.findAndCount({
    skip:offset,
    take:limit,
  });

  return [count, rows];
}

export async function create(route: string[], capacity: number): Promise<Bus> {
    const busRepo = getConnection().getRepository(Bus);
    
    const bus = await busRepo.save(busRepo.create({
        route,
        capacity 
      }));

      return bus;
}