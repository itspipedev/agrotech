import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'almacen' })
export class Almacen {
  @PrimaryGeneratedColumn()
  id_almacen_pk: number;

  @Column({ length: 100 })
  nombre_almacen: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;
}
