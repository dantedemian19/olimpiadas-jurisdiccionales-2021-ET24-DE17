"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const historia_clinica_entity_1 = require("../../domain/historia-clinica.entity");
const historia_clinica_dto_1 = require("../dto/historia-clinica.dto");
/**
 * A HistoriaClinica mapper object.
 */
class HistoriaClinicaMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new historia_clinica_entity_1.HistoriaClinica();
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
        const entityDTO = new historia_clinica_dto_1.HistoriaClinicaDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.HistoriaClinicaMapper = HistoriaClinicaMapper;
//# sourceMappingURL=historia-clinica.mapper.js.map