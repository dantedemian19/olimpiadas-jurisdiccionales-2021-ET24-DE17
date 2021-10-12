import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { ProvinciaDTO } from '../service/dto/provincia.dto';
import { ProvinciaMapper } from '../service/mapper/provincia.mapper';
import { ProvinciaRepository } from '../repository/provincia.repository';

const relationshipNames = [];

@Injectable()
export class ProvinciaService {
    logger = new Logger('ProvinciaService');

    constructor(@InjectRepository(ProvinciaRepository) private provinciaRepository: ProvinciaRepository) {}

    async findById(id: string): Promise<ProvinciaDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.provinciaRepository.findOne(id, options);
        return ProvinciaMapper.fromEntityToDTO(result);
    }

    async findByFields(options: FindOneOptions<ProvinciaDTO>): Promise<ProvinciaDTO | undefined> {
        const result = await this.provinciaRepository.findOne(options);
        return ProvinciaMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<ProvinciaDTO>): Promise<[ProvinciaDTO[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.provinciaRepository.findAndCount(options);
        const provinciaDTO: ProvinciaDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach((provincia) => provinciaDTO.push(ProvinciaMapper.fromEntityToDTO(provincia)));
            resultList[0] = provinciaDTO;
        }
        return resultList;
    }

    async save(provinciaDTO: ProvinciaDTO, creator?: string): Promise<ProvinciaDTO | undefined> {
        const entity = ProvinciaMapper.fromDTOtoEntity(provinciaDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.provinciaRepository.save(entity);
        return ProvinciaMapper.fromEntityToDTO(result);
    }

    async update(provinciaDTO: ProvinciaDTO, updater?: string): Promise<ProvinciaDTO | undefined> {
        const entity = ProvinciaMapper.fromDTOtoEntity(provinciaDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.provinciaRepository.update(entity.id, entity);
        return provinciaDTO;
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.provinciaRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
