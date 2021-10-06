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
const diario_mapper_1 = require("../service/mapper/diario.mapper");
const diario_repository_1 = require("../repository/diario.repository");
const relationshipNames = [];
let DiarioService = class DiarioService {
    constructor(diarioRepository) {
        this.diarioRepository = diarioRepository;
        this.logger = new common_1.Logger('DiarioService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.diarioRepository.findOne(id, options);
        return diario_mapper_1.DiarioMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.diarioRepository.findOne(options);
        return diario_mapper_1.DiarioMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.diarioRepository.findAndCount(options);
        const diarioDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(diario => diarioDTO.push(diario_mapper_1.DiarioMapper.fromEntityToDTO(diario)));
            resultList[0] = diarioDTO;
        }
        return resultList;
    }
    async save(diarioDTO, creator) {
        const entity = diario_mapper_1.DiarioMapper.fromDTOtoEntity(diarioDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.diarioRepository.save(entity);
        return diario_mapper_1.DiarioMapper.fromEntityToDTO(result);
    }
    async update(diarioDTO, updater) {
        const entity = diario_mapper_1.DiarioMapper.fromDTOtoEntity(diarioDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.diarioRepository.update(entity.id, entity);
        return diarioDTO;
    }
    async deleteById(id) {
        await this.diarioRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
DiarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(diario_repository_1.DiarioRepository)),
    __metadata("design:paramtypes", [diario_repository_1.DiarioRepository])
], DiarioService);
exports.DiarioService = DiarioService;
//# sourceMappingURL=diario.service.js.map