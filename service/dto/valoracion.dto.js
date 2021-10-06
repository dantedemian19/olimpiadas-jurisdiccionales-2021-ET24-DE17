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
 * A ValoracionDTO object.
 */
class ValoracionDTO extends base_dto_1.BaseDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Min(1),
    class_validator_1.Max(5),
    swagger_1.ApiModelProperty({ description: 'estrellas field' }),
    __metadata("design:type", Number)
], ValoracionDTO.prototype, "estrellas", void 0);
__decorate([
    class_validator_1.Length(1, 500),
    swagger_1.ApiModelProperty({ description: 'descripcion field', required: false }),
    __metadata("design:type", String)
], ValoracionDTO.prototype, "descripcion", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    swagger_1.ApiModelProperty({ description: 'filter valorations by type', required: false }),
    __metadata("design:type", Boolean)
], ValoracionDTO.prototype, "isForAttention", void 0);
exports.ValoracionDTO = ValoracionDTO;
//# sourceMappingURL=valoracion.dto.js.map