import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { PacienteDTO } from './paciente.dto';
import { MedicoDTO } from './medico.dto';
import { TurnoDTO } from './turno.dto';
import { UserDTO } from './user.dto';

export class mailYourTurnDTO{
    @IsNotEmpty()
    @ApiModelProperty({ description: 'paciente field' })
    paciente: PacienteDTO;
    @IsNotEmpty()
    @ApiModelProperty({ description: 'medico field' })
    medico: MedicoDTO;
    @IsNotEmpty()
    @ApiModelProperty({ description: 'Turno field' })
    turno: TurnoDTO;

}
export class mailContactUsDTO{
    @IsNotEmpty()
    @ApiModelProperty({ description: 'Contact Us Text field' })
    text: string;
}
export class mailMedicNotificationDTO{
    @IsNotEmpty()
    @ApiModelProperty({ description: 'user field' })
    user: UserDTO;
    @IsNotEmpty()
    @ApiModelProperty({ description: 'medico field' })
    medico: MedicoDTO;
}