"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const especialidades_medicas_entity_1 = require("../../domain/especialidades-medicas.entity");
const especialidades_medicas_dto_1 = require("../dto/especialidades-medicas.dto");
/**
 * A EspecialidadesMedicas mapper object.
 */
class EspecialidadesMedicasMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new especialidades_medicas_entity_1.EspecialidadesMedicas();
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
        const entityDTO = new especialidades_medicas_dto_1.EspecialidadesMedicasDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.EspecialidadesMedicasMapper = EspecialidadesMedicasMapper;
//# sourceMappingURL=especialidades-medicas.mapper.js.map