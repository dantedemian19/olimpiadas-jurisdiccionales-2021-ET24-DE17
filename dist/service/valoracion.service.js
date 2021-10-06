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
const valoracion_mapper_1 = require("../service/mapper/valoracion.mapper");
const valoracion_repository_1 = require("../repository/valoracion.repository");
const relationshipNames = [];
let ValoracionService = class ValoracionService {
    constructor(valoracionRepository) {
        this.valoracionRepository = valoracionRepository;
        this.logger = new common_1.Logger('ValoracionService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.valoracionRepository.findOne(id, options);
        return valoracion_mapper_1.ValoracionMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.valoracionRepository.findOne(options);
        return valoracion_mapper_1.ValoracionMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.valoracionRepository.findAndCount(options);
        // this.logger.debug(resultList)
        const valoracionDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(valoracion => valoracionDTO.push(valoracion_mapper_1.ValoracionMapper.fromEntityToDTO(valoracion)));
            resultList[0] = valoracionDTO;
        }
        return resultList;
    }
    async save(valoracionDTO, creator) {
        const entity = valoracion_mapper_1.ValoracionMapper.fromDTOtoEntity(valoracionDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.valoracionRepository.save(entity);
        return valoracion_mapper_1.ValoracionMapper.fromEntityToDTO(result);
    }
    async update(valoracionDTO, updater) {
        const entity = valoracion_mapper_1.ValoracionMapper.fromDTOtoEntity(valoracionDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.valoracionRepository.update(entity.id, entity);
        return valoracionDTO;
    }
    async deleteById(id) {
        await this.valoracionRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
ValoracionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(valoracion_repository_1.ValoracionRepository)),
    __metadata("design:paramtypes", [valoracion_repository_1.ValoracionRepository])
], ValoracionService);
exports.ValoracionService = ValoracionService;
//# sourceMappingURL=valoracion.service.js.map