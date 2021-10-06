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
const paciente_mapper_1 = require("../service/mapper/paciente.mapper");
const paciente_repository_1 = require("../repository/paciente.repository");
const relationshipNames = [];
let PacienteService = class PacienteService {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
        this.logger = new common_1.Logger('PacienteService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.pacienteRepository.findOne(id, options);
        return paciente_mapper_1.PacienteMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.pacienteRepository.findOne(options);
        return paciente_mapper_1.PacienteMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.pacienteRepository.findAndCount(options);
        const pacienteDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(paciente => pacienteDTO.push(paciente_mapper_1.PacienteMapper.fromEntityToDTO(paciente)));
            resultList[0] = pacienteDTO;
        }
        return resultList;
    }
    async save(pacienteDTO, creator) {
        const entity = paciente_mapper_1.PacienteMapper.fromDTOtoEntity(pacienteDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.pacienteRepository.save(entity);
        return paciente_mapper_1.PacienteMapper.fromEntityToDTO(result);
    }
    async update(pacienteDTO, updater) {
        const entity = paciente_mapper_1.PacienteMapper.fromDTOtoEntity(pacienteDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.pacienteRepository.update(entity.id, entity);
        return pacienteDTO;
    }
    async deleteById(id) {
        await this.pacienteRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
PacienteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(paciente_repository_1.PacienteRepository)),
    __metadata("design:paramtypes", [paciente_repository_1.PacienteRepository])
], PacienteService);
exports.PacienteService = PacienteService;
//# sourceMappingURL=paciente.service.js.map