/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Provincia.
 */
@Entity('provincia')
export class Provincia extends BaseEntity {
    @Column({ name: 'nombre', unique: true })
    nombre: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
