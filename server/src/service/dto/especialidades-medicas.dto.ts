/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { EspecialidadesTipo } from '../../domain/enumeration/especialidades-tipo';

/**
 * A EspecialidadesMedicasDTO object.
 */
export class EspecialidadesMedicasDTO extends BaseDTO {
    @ApiModelProperty({ enum: EspecialidadesTipo, description: 'especialidad enum field', required: false })
    especialidad: EspecialidadesTipo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
