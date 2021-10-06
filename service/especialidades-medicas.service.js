"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const especialidades_medicas_mapper_1 = require("../service/mapper/especialidades-medicas.mapper");
const especialidades_medicas_repository_1 = require("../repository/especialidades-medicas.repository");
const relationshipNames = [];
let EspecialidadesMedicasService = class EspecialidadesMedicasService {
    constructor(especialidadesMedicasRepository) {
        this.especialidadesMedicasRepository = especialidadesMedicasRepository;
        this.logger = new common_1.Logger('EspecialidadesMedicasService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.especialidadesMedicasRepository.findOne(id, options);
        return especialidades_medicas_mapper_1.EspecialidadesMedicasMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.especialidadesMedicasRepository.findOne(options);
        return especialidades_medicas_mapper_1.EspecialidadesMedicasMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.especialidadesMedicasRepository.findAndCount(options);
        const especialidadesMedicasDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(especialidadesMedicas => especialidadesMedicasDTO.push(especialidades_medicas_mapper_1.EspecialidadesMedicasMapper.fromEntityToDTO(especialidadesMedicas)));
            resultList[0] = especialidadesMedicasDTO;
        }
        return resultList;
    }
    async save(especialidadesMedicasDTO, creator) {
        const entity = especialidades_medicas_mapper_1.EspecialidadesMedicasMapper.fromDTOtoEntity(especialidadesMedicasDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.especialidadesMedicasRepository.save(entity);
        return especialidades_medicas_mapper_1.EspecialidadesMedicasMapper.fromEntityToDTO(result);
    }
    async update(especialidadesMedicasDTO, updater) {
        const entity = especialidades_medicas_mapper_1.EspecialidadesMedicasMapper.fromDTOtoEntity(especialidadesMedicasDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.especialidadesMedicasRepository.update(entity.id, entity);
        return especialidadesMedicasDTO;
    }
    async deleteById(id) {
        await this.especialidadesMedicasRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
EspecialidadesMedicasService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(especialidades_medicas_repository_1.EspecialidadesMedicasRepository)),
    __metadata("design:paramtypes", [especialidades_medicas_repository_1.EspecialidadesMedicasRepository])
], EspecialidadesMedicasService);
exports.EspecialidadesMedicasService = EspecialidadesMedicasService;
//# sourceMappingURL=especialidades-medicas.service.js.map