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
const TurnoEstado_1 = require("./enumeration/TurnoEstado");
/**
 * A Turno.
 */
let Turno = class Turno extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'simple-enum', name: 'estado', enum: TurnoEstado_1.TurnoEstado }),
    __metadata("design:type", String)
], Turno.prototype, "estado", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', name: 'fecha_hora' }),
    __metadata("design:type", Object)
], Turno.prototype, "fechaHora", void 0);
__decorate([
    typeorm_1.Column({ name: 'motivo', length: 500 }),
    __metadata("design:type", String)
], Turno.prototype, "motivo", void 0);
__decorate([
    typeorm_1.Column({ name: 'descripcion', length: 500, nullable: true }),
    __metadata("design:type", String)
], Turno.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({ name: 'paciente', length: 500 }),
    __metadata("design:type", String)
], Turno.prototype, "paciente", void 0);
Turno = __decorate([
    typeorm_1.Entity('turno')
], Turno);
exports.Turno = Turno;
//# sourceMappingURL=turno.entity.js.map