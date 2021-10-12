import { EspecialidadesTipo } from 'app/shared/model/enumerations/especialidades-tipo.model';

export interface IMedico {
  id?: string;
  dni?: number;
  matricula?: string;
  nombre?: string;
  apellido?: string;
  telefono?: number | null;
  mail?: string;
  atiendeDiscapacitados?: boolean;
  especialidad?: EspecialidadesTipo | null;
  provinciaId?: string;
  ciudadId?: string | null;
}

export const defaultValue: Readonly<IMedico> = {
  atiendeDiscapacitados: false,
};
