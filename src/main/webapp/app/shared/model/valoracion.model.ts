export interface IValoracion {
  id?: string;
  estrellas?: number;
  descripcion?: string | null;
  isPaciente?: boolean | null;
}

export const defaultValue: Readonly<IValoracion> = {
  isPaciente: false,
};
