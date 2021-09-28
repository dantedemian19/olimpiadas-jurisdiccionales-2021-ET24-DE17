/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

/**
 * A PacienteDTO object.
 */
export class PacienteDTO extends BaseDTO {
    @IsNotEmpty()
    @Length(1, 8)
    @ApiModelProperty({ description: 'dni field' })
    dni: number;

    @Length(1, 500)
    @Matches('^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$')
    @ApiModelProperty({ description: 'historiaClinica field', required: false })
    historiaClinica: string;

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

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
