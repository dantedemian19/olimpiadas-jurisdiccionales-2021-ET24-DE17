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
/**
 * A PacienteDTO object.
 */
class PacienteDTO extends base_dto_1.BaseDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(1, 8),
    swagger_1.ApiModelProperty({ description: 'dni field' }),
    __metadata("design:type", Number)
], PacienteDTO.prototype, "dni", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(1, 100),
    class_validator_1.Matches('^[A-Za-z0-9 ]+$'),
    swagger_1.ApiModelProperty({ description: 'nombre field' }),
    __metadata("design:type", String)
], PacienteDTO.prototype, "nombre", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(1, 100),
    class_validator_1.Matches('^[A-Za-z0-9 ]+$'),
    swagger_1.ApiModelProperty({ description: 'apellido field' }),
    __metadata("design:type", String)
], PacienteDTO.prototype, "apellido", void 0);
__decorate([
    class_validator_1.Length(1, 10),
    swagger_1.ApiModelProperty({ description: 'telefono field', required: false }),
    __metadata("design:type", Number)
], PacienteDTO.prototype, "telefono", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(1),
    class_validator_1.Matches('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
    swagger_1.ApiModelProperty({ description: 'mail field' }),
    __metadata("design:type", String)
], PacienteDTO.prototype, "mail", void 0);
exports.PacienteDTO = PacienteDTO;
//# sourceMappingURL=paciente.dto.js.map