/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { SintomasTipo } from './enumeration/sintomas-tipo';

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

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
