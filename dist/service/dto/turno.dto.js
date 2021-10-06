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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const base_dto_1 = require("./base.dto");
const TurnoEstado_1 = require("../../domain/enumeration/TurnoEstado");
/**
 * A TurnoDTO object.
 */
class TurnoDTO extends base_dto_1.BaseDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty({ enum: TurnoEstado_1.TurnoEstado, description: 'estado enum field' }),
    __metadata("design:type", String)
], TurnoDTO.prototype, "estado", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty({ description: 'fechaHora field' }),
    __metadata("design:type", Object)
], TurnoDTO.prototype, "fechaHora", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(1, 500),
    swagger_1.ApiModelProperty({ description: 'motivo field' }),
    __metadata("design:type", String)
], TurnoDTO.prototype, "motivo", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(1, 500),
    swagger_1.ApiModelProperty({ description: 'motivo field' }),
    __metadata("design:type", String)
], TurnoDTO.prototype, "paciente", void 0);
__decorate([
    class_validator_1.Length(1, 500),
    swagger_1.ApiModelProperty({ description: 'descripcion field', required: false }),
    __metadata("design:type", String)
], TurnoDTO.prototype, "descripcion", void 0);
exports.TurnoDTO = TurnoDTO;
//# sourceMappingURL=turno.dto.js.map