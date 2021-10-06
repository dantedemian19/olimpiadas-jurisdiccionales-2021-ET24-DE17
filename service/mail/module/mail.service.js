'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class mailService {
    constructor() {
        this.logger = new common_1.Logger('MailService');
    }
    async mailTurno(paciente, Medico, turno) {
        const nodemailer = require('nodemailer');
        const directTransport = require('nodemailer-direct-transport');
        const transporter = nodemailer.createTransport(directTransport());
        let notificacionTurno;
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: process.env.MAIL,
            to: paciente.mail,
            subject: 'Turno Asignado',
            text: '',
            html: notificacionTurno,
        });
        return null;
    }
    async mailContactanos(paciente, Medico, turno) {
        const nodemailer = require('nodemailer');
        const directTransport = require('nodemailer-direct-transport');
        const transporter = nodemailer.createTransport(directTransport());
        let notificacionTurno;
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: paciente.mail,
            to: process.env.MAIL,
            subject: 'mensaje de usuario',
            text: '',
            html: notificacionTurno,
        });
        return null;
    }
}
exports.mailService = mailService;
//# sourceMappingURL=mail.service.js.map