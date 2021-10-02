/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Medico } from './medico.entity';
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

    @ManyToOne(() => Medico)
    medico: Medico;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
