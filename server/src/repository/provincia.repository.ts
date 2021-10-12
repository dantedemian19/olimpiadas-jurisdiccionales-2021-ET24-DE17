import { EntityRepository, Repository } from 'typeorm';
import { Provincia } from '../domain/provincia.entity';

@EntityRepository(Provincia)
export class ProvinciaRepository extends Repository<Provincia> {}
