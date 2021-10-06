"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_entity_1 = require("../../domain/paciente.entity");
const paciente_dto_1 = require("../dto/paciente.dto");
/**
 * A Paciente mapper object.
 */
class PacienteMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new paciente_entity_1.Paciente();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }
    static fromEntityToDTO(entity) {
        if (!entity) {
            return;
        }
        const entityDTO = new paciente_dto_1.PacienteDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.PacienteMapper = PacienteMapper;
//# sourceMappingURL=paciente.mapper.js.map