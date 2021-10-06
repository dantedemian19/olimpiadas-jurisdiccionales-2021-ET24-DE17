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
const medico_mapper_1 = require("../service/mapper/medico.mapper");
const medico_repository_1 = require("../repository/medico.repository");
const relationshipNames = [];
let MedicoService = class MedicoService {
    constructor(medicoRepository) {
        this.medicoRepository = medicoRepository;
        this.logger = new common_1.Logger('MedicoService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.medicoRepository.findOne(id, options);
        return medico_mapper_1.MedicoMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.medicoRepository.findOne(options);
        return medico_mapper_1.MedicoMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.medicoRepository.findAndCount(options);
        const medicoDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(medico => medicoDTO.push(medico_mapper_1.MedicoMapper.fromEntityToDTO(medico)));
            resultList[0] = medicoDTO;
        }
        return resultList;
    }
    async save(medicoDTO, creator) {
        const entity = medico_mapper_1.MedicoMapper.fromDTOtoEntity(medicoDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.medicoRepository.save(entity);
        return medico_mapper_1.MedicoMapper.fromEntityToDTO(result);
    }
    async update(medicoDTO, updater) {
        const entity = medico_mapper_1.MedicoMapper.fromDTOtoEntity(medicoDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.medicoRepository.update(entity.id, entity);
        return medicoDTO;
    }
    async deleteById(id) {
        await this.medicoRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
MedicoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(medico_repository_1.MedicoRepository)),
    __metadata("design:paramtypes", [medico_repository_1.MedicoRepository])
], MedicoService);
exports.MedicoService = MedicoService;
//# sourceMappingURL=medico.service.js.map