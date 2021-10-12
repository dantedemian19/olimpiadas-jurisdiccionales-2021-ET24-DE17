import dayjs from 'dayjs';
import { Categoria } from 'app/shared/model/enumerations/categoria.model';

export interface IHistoriaClinica {
  fecha?: string;
  diagnostico?: string;
  tratamiento?: string;
  categoria?: Categoria | null;
  id_turno?: string | null;
  id_medico?: string | null;
  id_paciente?: string | null;
  sintoma?: string | null;
}

export const defaultValue: Readonly<IHistoriaClinica> = {};
