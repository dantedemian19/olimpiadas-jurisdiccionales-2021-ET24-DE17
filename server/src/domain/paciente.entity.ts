/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Paciente.
 */
@Entity('paciente')
export class Paciente extends BaseEntity {
    @Column({ type: 'integer', name: 'dni', length: 8 })
    dni: number;

    @Column({ name: 'historia_clinica', length: 500, nullable: true })
    historiaClinica: string;

    @Column({ name: 'nombre', length: 100 })
    nombre: string;

    @Column({ name: 'apellido', length: 100 })
    apellido: string;

    @Column({ type: 'integer', name: 'telefono', length: 10, nullable: true })
    telefono: number;

    @Column({ name: 'mail' })
    mail: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
