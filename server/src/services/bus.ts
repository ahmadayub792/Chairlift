
import * as BusRepo from '../repo/bus'
import Bus from '../entities/Bus'

export async function list(offset: number, limit: number): Promise<[number, any[]]> {
  return await BusRepo.list(offset, limit);
}

export async function create(route: string[]): Promise<Bus> {
    return await BusRepo.create(route, 4);
}