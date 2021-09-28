export interface IMedico {
  id?: string;
  dni?: number;
  matricula?: string;
  nombre?: string;
  apellido?: string;
  telefono?: number | null;
  mail?: string;
  atiendeDiscapacitados?: boolean;
}

export const defaultValue: Readonly<IMedico> = {
  atiendeDiscapacitados: false,
};
