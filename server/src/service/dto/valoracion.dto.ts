/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

/**
 * A ValoracionDTO object.
 */
export class ValoracionDTO extends BaseDTO {
    @IsNotEmpty()
    @Length(1, 5)
    @ApiModelProperty({ description: 'estrellas field' })
    estrellas: number;

    @Length(1, 500)
    @ApiModelProperty({ description: 'descripcion field', required: false })
    descripcion: string;

    @ApiModelProperty({ description: 'isPaciente field', required: false })
    isPaciente: boolean;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
