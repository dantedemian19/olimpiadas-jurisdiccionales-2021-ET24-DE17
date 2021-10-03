/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsBoolean, IsNotEmpty, isNotEmpty, IsString } from 'class-validator';
import { BaseDTO } from './base.dto';

/**
 * A Clinical-HistoryDTO to get an object.
 */
export class GetHistoryByIdDTO extends BaseDTO {
    @IsBoolean()
    @ApiModelProperty({ description: 'IsForPaciente field', required: false })
    IsForPaciente: boolean;

    @IsString()
    @ApiModelProperty({ description: 'ID field', required: false })
    ID: string;
}
