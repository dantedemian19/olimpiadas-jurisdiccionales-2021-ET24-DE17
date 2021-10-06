"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medico_entity_1 = require("../../domain/medico.entity");
const medico_dto_1 = require("../dto/medico.dto");
/**
 * A Medico mapper object.
 */
class MedicoMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new medico_entity_1.Medico();
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
        const entityDTO = new medico_dto_1.MedicoDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.MedicoMapper = MedicoMapper;
//# sourceMappingURL=medico.mapper.js.map