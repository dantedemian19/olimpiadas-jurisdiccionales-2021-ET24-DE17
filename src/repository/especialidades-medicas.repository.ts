import { EntityRepository, Repository } from 'typeorm';
import { EspecialidadesMedicas } from '../domain/especialidades-medicas.entity';

@EntityRepository(EspecialidadesMedicas)
export class EspecialidadesMedicasRepository extends Repository<EspecialidadesMedicas> {}
