/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { EspecialidadesTipo } from './enumeration/especialidades-tipo';

/**
 * A EspecialidadesMedicas.
 */
@Entity('especialidades_medicas')
export class EspecialidadesMedicas extends BaseEntity {
    @Column({ type: 'simple-enum', name: 'especialidad', enum: EspecialidadesTipo })
    especialidad: EspecialidadesTipo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
