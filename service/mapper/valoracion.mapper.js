"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const valoracion_entity_1 = require("../../domain/valoracion.entity");
const valoracion_dto_1 = require("../dto/valoracion.dto");
/**
 * A Valoracion mapper object.
 */
class ValoracionMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new valoracion_entity_1.Valoracion();
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
        const entityDTO = new valoracion_dto_1.ValoracionDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.ValoracionMapper = ValoracionMapper;
//# sourceMappingURL=valoracion.mapper.js.map