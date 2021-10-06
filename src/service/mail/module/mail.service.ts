'use strict';
import { Body, Injectable, Logger } from '@nestjs/common';
import { MedicoDTO } from 'src/service/dto/medico.dto';
import { PacienteDTO } from 'src/service/dto/paciente.dto';
import { TurnoDTO } from 'src/service/dto/turno.dto';

export class mailService {
    logger = new Logger('MailService');
    async mailTurno(paciente: PacienteDTO, Medico: MedicoDTO, turno: TurnoDTO): Promise<PacienteDTO | undefined> {
        const nodemailer = require('nodemailer');
        const directTransport = require('nodemailer-direct-transport');
        const transporter = nodemailer.createTransport(directTransport());
        let notificacionTurno;
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: process.env.MAIL, // sender address
            to: paciente.mail, // list of receivers
            subject: 'Turno Asignado', // Subject line
            text: '', // plain text body
            html: notificacionTurno, // html body
        });
        return null;
    }

    async mailContactanos(paciente: PacienteDTO, Medico: MedicoDTO, turno: TurnoDTO): Promise<PacienteDTO | undefined> {
        const nodemailer = require('nodemailer');
        const directTransport = require('nodemailer-direct-transport');
        const transporter = nodemailer.createTransport(directTransport());
        let notificacionTurno;
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: paciente.mail, // sender address
            to: process.env.MAIL, // list of receivers
            subject: 'mensaje de usuario', // Subject line
            text: '', // plain text body
            html: notificacionTurno, // html body
        });
        return null;
    }
}
