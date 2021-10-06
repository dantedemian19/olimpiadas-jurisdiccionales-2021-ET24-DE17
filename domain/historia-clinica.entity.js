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
const categoria_1 = require("./enumeration/categoria");
/**
 * A HistoriaClinica.
 */
let HistoriaClinica = class HistoriaClinica extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'timestamp', name: 'fecha' }),
    __metadata("design:type", Object)
], HistoriaClinica.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({ name: 'diagnostico', length: 500 }),
    __metadata("design:type", String)
], HistoriaClinica.prototype, "diagnostico", void 0);
__decorate([
    typeorm_1.Column({ name: 'tratamiento', length: 500 }),
    __metadata("design:type", String)
], HistoriaClinica.prototype, "tratamiento", void 0);
__decorate([
    typeorm_1.Column({ name: 'medico', length: 500 }),
    __metadata("design:type", String)
], HistoriaClinica.prototype, "medico", void 0);
__decorate([
    typeorm_1.Column({ name: 'paciente', length: 500 }),
    __metadata("design:type", String)
], HistoriaClinica.prototype, "paciente", void 0);
__decorate([
    typeorm_1.Column({ type: 'simple-enum', name: 'categoria', enum: categoria_1.Categoria }),
    __metadata("design:type", String)
], HistoriaClinica.prototype, "categoria", void 0);
HistoriaClinica = __decorate([
    typeorm_1.Entity('historia_clinica')
], HistoriaClinica);
exports.HistoriaClinica = HistoriaClinica;
//# sourceMappingURL=historia-clinica.entity.js.map