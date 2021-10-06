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
const sintomas_tipo_1 = require("../../domain/enumeration/sintomas-tipo");
/**
 * A DiarioDTO object.
 */
class DiarioDTO extends base_dto_1.BaseDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty({ description: 'fecha field' }),
    __metadata("design:type", Object)
], DiarioDTO.prototype, "fecha", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(1, 500),
    class_validator_1.Matches('^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$'),
    swagger_1.ApiModelProperty({ description: 'entrada field' }),
    __metadata("design:type", String)
], DiarioDTO.prototype, "entrada", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(1, 500),
    class_validator_1.Matches('^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$'),
    swagger_1.ApiModelProperty({ description: 'entrada field' }),
    __metadata("design:type", String)
], DiarioDTO.prototype, "paciente", void 0);
__decorate([
    swagger_1.ApiModelProperty({ enum: sintomas_tipo_1.SintomasTipo, description: 'sintomas enum field', required: false }),
    __metadata("design:type", String)
], DiarioDTO.prototype, "sintomas", void 0);
exports.DiarioDTO = DiarioDTO;
//# sourceMappingURL=diario.dto.js.map