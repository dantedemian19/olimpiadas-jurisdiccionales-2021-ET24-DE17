import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { ValoracionDTO } from '../service/dto/valoracion.dto';
import { ValoracionMapper } from '../service/mapper/valoracion.mapper';
import { ValoracionRepository } from '../repository/valoracion.repository';

const relationshipNames = [];

@Injectable()
export class ValoracionService {
    logger = new Logger('ValoracionService');

    constructor(@InjectRepository(ValoracionRepository) private valoracionRepository: ValoracionRepository) {}

    async findById(id: string): Promise<ValoracionDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.valoracionRepository.findOne(id, options);
        return ValoracionMapper.fromEntityToDTO(result);
    }

    async findByFields(options: FindOneOptions<ValoracionDTO>): Promise<ValoracionDTO | undefined> {
        const result = await this.valoracionRepository.findOne(options);
        return ValoracionMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<ValoracionDTO>): Promise<[ValoracionDTO[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.valoracionRepository.findAndCount(options);
        const valoracionDTO: ValoracionDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(valoracion => valoracionDTO.push(ValoracionMapper.fromEntityToDTO(valoracion)));
            resultList[0] = valoracionDTO;
        }
        return resultList;
    }

    async save(valoracionDTO: ValoracionDTO, creator?: string): Promise<ValoracionDTO | undefined> {
        const entity = ValoracionMapper.fromDTOtoEntity(valoracionDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.valoracionRepository.save(entity);
        return ValoracionMapper.fromEntityToDTO(result);
    }

    async update(valoracionDTO: ValoracionDTO, updater?: string): Promise<ValoracionDTO | undefined> {
        const entity = ValoracionMapper.fromDTOtoEntity(valoracionDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.valoracionRepository.update(entity.id, entity);
        return valoracionDTO;
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.valoracionRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
