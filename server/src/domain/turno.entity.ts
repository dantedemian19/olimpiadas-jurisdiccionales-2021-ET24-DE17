/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Paciente } from './paciente.entity';

// import { TurnoEstado } from './enumeration/turno-estado';

/**
 * A Turno.
 */
@Entity('turno')
export class Turno extends BaseEntity {
    // @Column({ type: 'simple-enum', name: 'estado', enum: TurnoEstado })
    // estado: TurnoEstado;

    @Column({ type: 'timestamp', name: 'fecha_hora' })
    fechaHora: any;

    @Column({ name: 'motivo', length: 500 })
    motivo: string;

    @Column({ name: 'descripcion', length: 500, nullable: true })
    descripcion: string;

    @ManyToOne(()=> Paciente)
    paciente: Paciente;


    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
