"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base/base.entity");
const especialidades_tipo_1 = require("./enumeration/especialidades-tipo");
/**
 * A Medico.
 */
let Medico = class Medico extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'integer', name: 'dni', length: 8 }),
    __metadata("design:type", Number)
], Medico.prototype, "dni", void 0);
__decorate([
    typeorm_1.Column({ name: 'matricula', length: 100 }),
    __metadata("design:type", String)
], Medico.prototype, "matricula", void 0);
__decorate([
    typeorm_1.Column({ name: 'nombre', length: 100 }),
    __metadata("design:type", String)
], Medico.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ name: 'apellido', length: 100 }),
    __metadata("design:type", String)
], Medico.prototype, "apellido", void 0);
__decorate([
    typeorm_1.Column({ type: 'integer', name: 'telefono', length: 10, nullable: true }),
    __metadata("design:type", Number)
], Medico.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column({ name: 'mail' }),
    __metadata("design:type", String)
], Medico.prototype, "mail", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean', name: 'atiende_discapacitados' }),
    __metadata("design:type", Boolean)
], Medico.prototype, "atiendeDiscapacitados", void 0);
__decorate([
    typeorm_1.Column({ type: 'simple-enum', name: 'especialidad', enum: especialidades_tipo_1.EspecialidadesTipo }),
    __metadata("design:type", String)
], Medico.prototype, "especialidad", void 0);
Medico = __decorate([
    typeorm_1.Entity('medico')
], Medico);
exports.Medico = Medico;
//# sourceMappingURL=medico.entity.js.map