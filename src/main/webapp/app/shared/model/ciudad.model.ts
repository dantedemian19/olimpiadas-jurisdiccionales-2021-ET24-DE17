export interface ICiudad {
  id?: string;
  nombre?: string;
  provinciaId?: string | null;
}

export const defaultValue: Readonly<ICiudad> = {};
