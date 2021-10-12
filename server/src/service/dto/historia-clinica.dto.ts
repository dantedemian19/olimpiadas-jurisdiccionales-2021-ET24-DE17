/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { Categoria } from '../../domain/enumeration/categoria';

/**
 * A HistoriaClinicaDTO object.
 */
export class HistoriaClinicaDTO extends BaseDTO {
    @IsNotEmpty()
    @ApiModelProperty({ description: 'fecha field' })
    fecha: any;

    @IsNotEmpty()
    @Length(1, 500)
    @Matches('^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$')
    @ApiModelProperty({ description: 'diagnostico field' })
    diagnostico: string;

    @IsNotEmpty()
    @Length(1, 500)
    @Matches('^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$')
    @ApiModelProperty({ description: 'tratamiento field' })
    tratamiento: string;

    @ApiModelProperty({ enum: Categoria, description: 'categoria enum field', required: false })
    categoria: Categoria;

    @ApiModelProperty({ description: 'id_turno field', required: false })
    id_turno: string;

    @ApiModelProperty({ description: 'id_medico field', required: false })
    id_medico: string;

    @ApiModelProperty({ description: 'id_paciente field', required: false })
    id_paciente: string;

    @ApiModelProperty({ description: 'sintoma field', required: false })
    sintoma: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
