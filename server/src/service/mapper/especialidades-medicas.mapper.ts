import { EspecialidadesMedicas } from '../../domain/especialidades-medicas.entity';
import { EspecialidadesMedicasDTO } from '../dto/especialidades-medicas.dto';

/**
 * A EspecialidadesMedicas mapper object.
 */
export class EspecialidadesMedicasMapper {
    static fromDTOtoEntity(entityDTO: EspecialidadesMedicasDTO): EspecialidadesMedicas {
        if (!entityDTO) {
            return;
        }
        let entity = new EspecialidadesMedicas();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: EspecialidadesMedicas): EspecialidadesMedicasDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new EspecialidadesMedicasDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
