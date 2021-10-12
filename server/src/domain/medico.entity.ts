/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { EspecialidadesTipo } from './enumeration/especialidades-tipo';

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

    @Column({ type: 'simple-enum', name: 'especialidad', enum: EspecialidadesTipo })
    especialidad: EspecialidadesTipo;

    @Column({ name: 'provincia_id' })
    provinciaId: string;

    @Column({ name: 'ciudad_id', nullable: true })
    ciudadId: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
