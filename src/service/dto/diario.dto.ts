/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { SintomasTipo } from './../../domain/enumeration/sintomas-tipo';
import { Paciente } from 'src/domain/paciente.entity';

/**
 * A DiarioDTO object.
 */
export class DiarioDTO extends BaseDTO {
    @IsNotEmpty()
    @ApiModelProperty({ description: 'fecha field' })
    fecha: any;

    @IsNotEmpty()
    @Length(1, 500)
    @Matches('^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$')
    @ApiModelProperty({ description: 'entrada field' })
    entrada: string;

    @IsNotEmpty()
    @Length(1, 500)
    @Matches('^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$')
    @ApiModelProperty({ description: 'entrada field' })
    paciente: string;

    @ApiModelProperty({ enum: SintomasTipo, description: 'sintomas enum field', required: false })
    sintomas: SintomasTipo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
