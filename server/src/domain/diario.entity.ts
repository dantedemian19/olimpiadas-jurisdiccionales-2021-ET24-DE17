/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { SintomasTipo } from './enumeration/Sintomas-Tipo';

/**
 * A Diario.
 */
@Entity('diario')
export class Diario extends BaseEntity {
    @Column({ type: 'timestamp', name: 'fecha' })
    fecha: any;

    @Column({ name: 'entrada', length: 500 })
    entrada: string;

    @Column({ type: 'simple-enum', name: 'sintomas', enum: SintomasTipo })
    sintomas: SintomasTipo;

    @Column({ name: 'paciente', length: 500 })
    paciente: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
