/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Valoracion.
 */
@Entity('valoracion')
export class Valoracion extends BaseEntity {
    @Column({ type: 'integer', name: 'estrellas', length: 5 })
    estrellas: number;

    @Column({ name: 'descripcion', length: 500, nullable: true })
    descripcion: string;

    @Column({ type: 'boolean', name: 'is_paciente', nullable: true })
    isPaciente: boolean;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
