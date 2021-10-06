"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diario_entity_1 = require("../../domain/diario.entity");
const diario_dto_1 = require("../dto/diario.dto");
/**
 * A Diario mapper object.
 */
class DiarioMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new diario_entity_1.Diario();
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
        const entityDTO = new diario_dto_1.DiarioDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.DiarioMapper = DiarioMapper;
//# sourceMappingURL=diario.mapper.js.map