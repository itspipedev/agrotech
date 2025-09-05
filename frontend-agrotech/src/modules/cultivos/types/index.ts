export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}

export interface Cultivo {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  fechaInicio: string;
  fechaFin?: string;
  estado: string;
}