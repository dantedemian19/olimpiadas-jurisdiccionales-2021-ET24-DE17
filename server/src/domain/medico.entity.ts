/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Medico.
 */
@Entity('medico')
export class Medico extends BaseEntity {
    @Column({ type: 'integer', name: 'dni', length: 8 })
    dni: number;

    @Column({ name: 'matricula', length: 100 })
    matricula: string;

    @Column({ name: 'nombre', length: 100 })
    nombre: string;

    @Column({ name: 'apellido', length: 100 })
    apellido: string;

    @Column({ type: 'integer', name: 'telefono', length: 10, nullable: true })
    telefono: number;

    @Column({ name: 'mail' })
    mail: string;

    @Column({ type: 'boolean', name: 'atiende_discapacitados' })
    atiendeDiscapacitados: boolean;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
