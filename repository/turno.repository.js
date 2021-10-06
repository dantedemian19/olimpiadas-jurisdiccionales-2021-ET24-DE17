"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const turno_entity_1 = require("../domain/turno.entity");
let TurnoRepository = class TurnoRepository extends typeorm_1.Repository {
};
TurnoRepository = __decorate([
    typeorm_1.EntityRepository(turno_entity_1.Turno)
], TurnoRepository);
exports.TurnoRepository = TurnoRepository;
class temp {
}
exports.temp = temp;
//# sourceMappingURL=turno.repository.js.map