"use strict";
import { Body, Injectable, Logger } from "@nestjs/common";
import { MedicoDTO } from "src/service/dto/medico.dto";
import { PacienteDTO } from "src/service/dto/paciente.dto";
import { TurnoDTO } from "src/service/dto/turno.dto";


export class mailService{
  logger = new Logger('MailService');
  async main(paciente: PacienteDTO, Medico: MedicoDTO,turno: TurnoDTO): Promise<PacienteDTO | undefined>  {
    const nodemailer = require("nodemailer");
    var directTransport = require('nodemailer-direct-transport');
    var transporter = nodemailer.createTransport(directTransport())
    var notificacionTurno
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.MAIL, // sender address
    to: paciente.mail, // list of receivers
    subject: "Turno Asignado", // Subject line
    text: "", // plain text body
    html: notificacionTurno, // html body
  });
return null;
}

}