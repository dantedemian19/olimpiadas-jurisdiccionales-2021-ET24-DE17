import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { CiudadDTO } from '../service/dto/ciudad.dto';
import { CiudadMapper } from '../service/mapper/ciudad.mapper';
import { CiudadRepository } from '../repository/ciudad.repository';

const relationshipNames = [];

@Injectable()
export class ciudadeservice {
    logger = new Logger('ciudadeservice');

    constructor(@InjectRepository(CiudadRepository) private ciudadRepository: CiudadRepository) {}

    async findById(id: string): Promise<CiudadDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.ciudadRepository.findOne(id, options);
        return CiudadMapper.fromEntityToDTO(result);
    }

    async findByFields(options: FindOneOptions<CiudadDTO>): Promise<CiudadDTO | undefined> {
        const result = await this.ciudadRepository.findOne(options);
        return CiudadMapper.fromEntityToDTO(result);
    }

    async getRandomCity(options?: FindManyOptions<CiudadDTO>): Promise<CiudadDTO | undefined> {
        const [results, count] = await this.ciudadRepository.findAndCount(options);

        const randomIndex = Math.floor(Math.random() * count);
        return CiudadMapper.fromEntityToDTO(results[randomIndex]);
    }

    async findAndCount(options: FindManyOptions<CiudadDTO>): Promise<[CiudadDTO[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.ciudadRepository.findAndCount(options);
        const ciudadDTO: CiudadDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach((ciudad) => ciudadDTO.push(CiudadMapper.fromEntityToDTO(ciudad)));
            resultList[0] = ciudadDTO;
        }
        return resultList;
    }

    async save(ciudadDTO: CiudadDTO, creator?: string): Promise<CiudadDTO | undefined> {
        const entity = CiudadMapper.fromDTOtoEntity(ciudadDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.ciudadRepository.save(entity);
        return CiudadMapper.fromEntityToDTO(result);
    }

    async update(ciudadDTO: CiudadDTO, updater?: string): Promise<CiudadDTO | undefined> {
        const entity = CiudadMapper.fromDTOtoEntity(ciudadDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.ciudadRepository.update(entity.id, entity);
        return ciudadDTO;
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.ciudadRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
