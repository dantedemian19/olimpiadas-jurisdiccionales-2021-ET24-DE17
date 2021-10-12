/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Ciudad.
 */
@Entity('ciudad')
export class Ciudad extends BaseEntity {
    @Column({ name: 'nombre', unique: true })
    nombre: string;

    @Column({ name: 'provincia_id', nullable: false })
    provinciaId: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
