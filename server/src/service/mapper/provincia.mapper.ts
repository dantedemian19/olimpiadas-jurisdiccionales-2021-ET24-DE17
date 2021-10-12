import { Provincia } from '../../domain/provincia.entity';
import { ProvinciaDTO } from '../dto/provincia.dto';

/**
 * A Provincia mapper object.
 */
export class ProvinciaMapper {
    static fromDTOtoEntity(entityDTO: ProvinciaDTO): Provincia {
        if (!entityDTO) {
            return;
        }
        let entity = new Provincia();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Provincia): ProvinciaDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new ProvinciaDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
