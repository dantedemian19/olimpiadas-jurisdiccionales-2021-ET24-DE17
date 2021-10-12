/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Categoria } from './enumeration/categoria';

/**
 * A HistoriaClinica.
 */
@Entity('historia_clinica')
export class HistoriaClinica extends BaseEntity {
    @Column({ type: 'timestamp', name: 'fecha' })
    fecha: any;

    @Column({ name: 'diagnostico', length: 500 })
    diagnostico: string;

    @Column({ name: 'tratamiento', length: 500 })
    tratamiento: string;

    @Column({ type: 'simple-enum', name: 'categoria', enum: Categoria })
    categoria: Categoria;

    @Column({ name: 'id_turno', nullable: true })
    id_turno: string;

    @Column({ name: 'id_medico', nullable: true })
    id_medico: string;

    @Column({ name: 'id_paciente', nullable: true })
    id_paciente: string;

    @Column({ name: 'sintoma', nullable: true })
    sintoma: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
