/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';
import { TurnoEstado } from '../../domain/enumeration/TurnoEstado';

/**
 * A TurnoDTO object.
 */
export class TurnoDTO extends BaseDTO {
    @IsNotEmpty()
    @ApiModelProperty({ enum: TurnoEstado, description: 'estado enum field' })
    estado: TurnoEstado;

    @IsNotEmpty()
    @ApiModelProperty({ description: 'fechaHora field' })
    fechaHora: any;

    @IsNotEmpty()
    @Length(1, 500)
    @ApiModelProperty({ description: 'motivo field' })
    motivo: string;

    @IsNotEmpty()
    @Length(1, 500)
    @ApiModelProperty({ description: 'motivo field' })
    paciente: string;

    @Length(1, 500)
    @ApiModelProperty({ description: 'descripcion field', required: false })
    descripcion: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
