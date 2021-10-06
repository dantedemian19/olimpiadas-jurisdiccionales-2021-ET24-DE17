"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const turno_entity_1 = require("../../domain/turno.entity");
const turno_dto_1 = require("../dto/turno.dto");
/**
 * A Turno mapper object.
 */
class TurnoMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new turno_entity_1.Turno();
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
        const entityDTO = new turno_dto_1.TurnoDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.TurnoMapper = TurnoMapper;
//# sourceMappingURL=turno.mapper.js.map