/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

/**
 * A CiudadDTO object.
 */
export class CiudadDTO extends BaseDTO {
    @IsNotEmpty()
    @ApiModelProperty({ description: 'nombre field' })
    nombre: string;

    @ApiModelProperty({ description: 'provinciaId field', required: true })
    provinciaId: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
