import React, { useState } from 'react';
import type { Cultivo } from '../../types';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Select from '../atoms/Select';
import Button from '../atoms/Button';

interface CultivoFormProps {
  onSubmit: (cultivo: Omit<Cultivo, 'id'>) => void;
}

const CultivoForm: React.FC<CultivoFormProps> = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [estado, setEstado] = useState('activo');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nombre, descripcion, tipo, fechaInicio, fechaFin, estado });
  };

  return (
    <form className="cultivo-form" onSubmit={handleSubmit}>
      <h3>Registrar cultivos</h3>
      <div className="form-grid">
        <div className="form-field">
          <Label text="Nombre del cultivo" />
          <Input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <Label text="Descripción" />
          <Input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="form-field">
          <Label text="Tipo" />
          <Input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <Label text="Estado" />
          <Select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            options={[
              { value: 'activo', label: 'Activo' },
              { value: 'inactivo', label: 'Inactivo' },
              { value: 'completado', label: 'Completado' }
            ]}
          />
        </div>
        <div className="form-field">
          <Label text="Fecha inicio" />
          <Input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <Label text="Fecha fin" />
          <Input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default CultivoForm;