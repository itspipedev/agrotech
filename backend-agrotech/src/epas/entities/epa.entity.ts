import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TipoEpa } from 'src/tipos_epas/entities/tipos_epa.entity';

export enum EstadoEpaEnum {
  PRESENTE = 'presente',
  AUSENTE = 'ausente',
}

@Entity({ name: 'epa' })
export class Epa {
  @PrimaryGeneratedColumn()
  id_epa_pk: number;

  @Column()
  nombre_epa: string;

  @Column()
  descripcion_epa: string;

  @Column({
    type: 'enum',
    enum: EstadoEpaEnum,
    name: 'estado_epa_enum',
  })
  estado: EstadoEpaEnum;

  @ManyToOne(() => TipoEpa, tipoEpa => tipoEpa.epas)
  @JoinColumn({ name: 'id_tipo_epa_fk' })
  tipoEpa: TipoEpa;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;

}