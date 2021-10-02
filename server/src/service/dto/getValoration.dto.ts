/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import {
    IsOptional,
    IsBoolean,
} from 'class-validator';
import { BaseDTO } from './base.dto';

/**
 * A ValoracionDTO to get an object.
 */
export class GetValoracionDTO extends BaseDTO {
    @IsOptional()
    @IsBoolean()
    @ApiModelProperty({ description: 'isForAttention field', required: false })
    isForAttention: boolean;
}
