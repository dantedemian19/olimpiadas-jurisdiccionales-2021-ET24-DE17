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
 * A ValoracionDTO to get an object.
 */
class GetValoracionDTO extends base_dto_1.BaseDTO {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    swagger_1.ApiModelProperty({ description: 'isForAttention field', required: false }),
    __metadata("design:type", Boolean)
], GetValoracionDTO.prototype, "isForAttention", void 0);
exports.GetValoracionDTO = GetValoracionDTO;
//# sourceMappingURL=getValoration.dto.js.map