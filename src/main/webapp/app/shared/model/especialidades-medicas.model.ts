import { EspecialidadesTipo } from 'app/shared/model/enumerations/especialidades-tipo.model';

export interface IEspecialidadesMedicas {
  id?: string;
  especialidad?: EspecialidadesTipo | null;
}

export const defaultValue: Readonly<IEspecialidadesMedicas> = {};
