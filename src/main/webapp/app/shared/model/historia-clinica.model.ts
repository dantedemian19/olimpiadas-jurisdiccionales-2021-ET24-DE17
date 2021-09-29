import dayjs from 'dayjs';
import { Categoria } from 'app/shared/model/enumerations/categoria.model';

export interface IHistoriaClinica {
  fecha?: string;
  diagnostico?: string;
  tratamiento?: string;
  categoria?: Categoria | null;
}

export const defaultValue: Readonly<IHistoriaClinica> = {};
