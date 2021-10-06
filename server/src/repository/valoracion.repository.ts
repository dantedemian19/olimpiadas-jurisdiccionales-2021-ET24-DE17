import { EntityRepository, Repository } from 'typeorm';
import { Valoracion } from '../domain/valoracion.entity';

@EntityRepository(Valoracion)
export class ValoracionRepository extends Repository<Valoracion> {}
