'use strict';
import { Body, Injectable, Logger } from '@nestjs/common';
import { MedicoDTO } from 'src/service/dto/medico.dto';
import { PacienteDTO } from 'src/service/dto/paciente.dto';
import { TurnoDTO } from 'src/service/dto/turno.dto';

export class mailService {
    logger = new Logger('MailService');
    async mailTurno(paciente: PacienteDTO, medico: MedicoDTO, turno: TurnoDTO) {
        const nodemailer = require('nodemailer');
        const directTransport = require('nodemailer-direct-transport');
        const hbs = require('nodemailer-handlebars');
        const transporter = nodemailer.createTransport(directTransport());
        // send mail with defined transport object
        transporter.use(
            hbs({
            extname: ".hbs",
            layoutsDir: "../templates"
            })
        );
        const info = await transporter.sendMail({
            from: process.env.MAIL, // server mail address
            to: paciente.mail, // receiver
            subject: 'Turno Asignado', // Subject line
            html: "notificationTurno", // html body
            context: {
                name: paciente.nombre,
                fechaYHora: turno.fechaHora,
                doctorName: medico.nombre,
                doctorSurname: medico.apellido,
                doctorTel: medico.telefono,
            },
        });
        return null;
    }

    async mailContactanos(text: string){
        const nodemailer = require('nodemailer');
        const directTransport = require('nodemailer-direct-transport');
        const hbs = require('nodemailer-handlebars');
        const transporter = nodemailer.createTransport(directTransport());
        // send mail with defined transport object
        transporter.use(
            hbs({
            extname: ".hbs",
            layoutsDir: "../templates"
            })
        );
        const info = await transporter.sendMail({
            from: process.env.MAIL, // server mail address
            to: process.env.MAIL, // receiver
            subject: 'Contacto usuario', // Subject line
            html: "notificationTurno", // html body
            context: {
                contxt: Text,
            },
        });
    }
}
