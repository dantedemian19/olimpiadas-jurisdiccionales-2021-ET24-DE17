export interface IValoracion {
  id?: string;
  estrellas?: number;
  descripcion?: string | null;
  isForAttention?: boolean | null;
}

export const defaultValue: Readonly<IValoracion> = {
  isForAttention: false,
};
