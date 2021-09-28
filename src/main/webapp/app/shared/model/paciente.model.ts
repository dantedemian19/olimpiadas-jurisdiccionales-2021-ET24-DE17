export interface IPaciente {
  id?: string;
  dni?: number;
  historiaClinica?: string | null;
  nombre?: string;
  apellido?: string;
  telefono?: number | null;
  mail?: string;
}

export const defaultValue: Readonly<IPaciente> = {};
