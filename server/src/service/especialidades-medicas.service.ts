import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { EspecialidadesMedicasDTO } from '../service/dto/especialidades-medicas.dto';
import { EspecialidadesMedicasMapper } from '../service/mapper/especialidades-medicas.mapper';
import { EspecialidadesMedicasRepository } from '../repository/especialidades-medicas.repository';
import { EspecialidadesTipo } from '../domain/enumeration/especialidades-tipo';

const relationshipNames = [];

@Injectable()
export class EspecialidadesMedicasService {
    logger = new Logger('EspecialidadesMedicasService');

    constructor(
        @InjectRepository(EspecialidadesMedicasRepository)
        private especialidadesMedicasRepository: EspecialidadesMedicasRepository,
    ) {}

    async findById(id: string): Promise<EspecialidadesMedicasDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.especialidadesMedicasRepository.findOne(id, options);
        return EspecialidadesMedicasMapper.fromEntityToDTO(result);
    }

    async findByFields(
        options: FindOneOptions<EspecialidadesMedicasDTO>,
    ): Promise<EspecialidadesMedicasDTO | undefined> {
        const result = await this.especialidadesMedicasRepository.findOne(options);
        return EspecialidadesMedicasMapper.fromEntityToDTO(result);
    }

    async findAndCount(
        options: FindManyOptions<EspecialidadesMedicasDTO>,
    ): Promise<[EspecialidadesMedicasDTO[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.especialidadesMedicasRepository.findAndCount(options);
        const especialidadesMedicasDTO: EspecialidadesMedicasDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(especialidadesMedicas =>
                especialidadesMedicasDTO.push(EspecialidadesMedicasMapper.fromEntityToDTO(especialidadesMedicas)),
            );
            resultList[0] = especialidadesMedicasDTO;
        }
        return resultList;
    }

    async save(
        especialidadesMedicasDTO: EspecialidadesMedicasDTO,
        creator?: string,
    ): Promise<EspecialidadesMedicasDTO | undefined> {
        const entity = EspecialidadesMedicasMapper.fromDTOtoEntity(especialidadesMedicasDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.especialidadesMedicasRepository.save(entity);
        return EspecialidadesMedicasMapper.fromEntityToDTO(result);
    }

    async update(
        especialidadesMedicasDTO: EspecialidadesMedicasDTO,
        updater?: string,
    ): Promise<EspecialidadesMedicasDTO | undefined> {
        const entity = EspecialidadesMedicasMapper.fromDTOtoEntity(especialidadesMedicasDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.especialidadesMedicasRepository.update(entity.id, entity);
        return especialidadesMedicasDTO;
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.especialidadesMedicasRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
