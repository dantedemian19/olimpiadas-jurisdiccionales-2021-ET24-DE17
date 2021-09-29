import { Valoracion } from '../../domain/valoracion.entity';
import { ValoracionDTO } from '../dto/valoracion.dto';

/**
 * A Valoracion mapper object.
 */
export class ValoracionMapper {
    static fromDTOtoEntity(entityDTO: ValoracionDTO): Valoracion {
        if (!entityDTO) {
            return;
        }
        let entity = new Valoracion();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Valoracion): ValoracionDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new ValoracionDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
