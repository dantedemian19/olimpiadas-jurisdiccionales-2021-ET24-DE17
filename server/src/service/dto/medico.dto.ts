/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';
import { EspecialidadesTipo } from '../../domain/enumeration/especialidades-tipo';

/**
 * A MedicoDTO object.
 */
export class MedicoDTO extends BaseDTO {
    @IsNotEmpty()
    @Length(1, 8)
    @ApiModelProperty({ description: 'dni field' })
    dni: number;

    @IsNotEmpty()
    @Length(1, 100)
    @ApiModelProperty({ description: 'matricula field' })
    matricula: string;

    @IsNotEmpty()
    @Length(1, 100)
    @Matches('^[A-Za-z0-9 ]+$')
    @ApiModelProperty({ description: 'nombre field' })
    nombre: string;

    @IsNotEmpty()
    @Length(1, 100)
    @Matches('^[A-Za-z0-9 ]+$')
    @ApiModelProperty({ description: 'apellido field' })
    apellido: string;

    @Length(1, 10)
    @ApiModelProperty({ description: 'telefono field', required: false })
    telefono: number;

    @IsNotEmpty()
    @MinLength(1)
    @Matches('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
    @ApiModelProperty({ description: 'mail field' })
    mail: string;

    @IsNotEmpty()
    @ApiModelProperty({ description: 'atiendeDiscapacitados field' })
    atiendeDiscapacitados: boolean;

    @ApiModelProperty({ enum: EspecialidadesTipo, description: 'especialidad enum field', required: false })
    especialidad: EspecialidadesTipo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
