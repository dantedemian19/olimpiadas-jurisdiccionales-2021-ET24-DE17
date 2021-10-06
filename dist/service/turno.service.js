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
const turno_mapper_1 = require("../service/mapper/turno.mapper");
const turno_repository_1 = require("../repository/turno.repository");
const relationshipNames = [];
let TurnoService = class TurnoService {
    constructor(turnoRepository) {
        this.turnoRepository = turnoRepository;
        this.logger = new common_1.Logger('TurnoService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.turnoRepository.findOne(id, options);
        return turno_mapper_1.TurnoMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.turnoRepository.findOne(options);
        return turno_mapper_1.TurnoMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.turnoRepository.findAndCount(options);
        const turnoDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(turno => turnoDTO.push(turno_mapper_1.TurnoMapper.fromEntityToDTO(turno)));
            // resultList[0] = turnoDTO;
        }
        return resultList;
    }
    async save(turnoDTO, creator) {
        const entity = turno_mapper_1.TurnoMapper.fromDTOtoEntity(turnoDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.turnoRepository.save(entity);
        return turno_mapper_1.TurnoMapper.fromEntityToDTO(result);
    }
    async update(turnoDTO, updater) {
        const entity = turno_mapper_1.TurnoMapper.fromDTOtoEntity(turnoDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        await this.turnoRepository.update(entity.id, entity);
        return turnoDTO;
    }
    async deleteById(id) {
        await this.turnoRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
TurnoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(turno_repository_1.TurnoRepository)),
    __metadata("design:paramtypes", [turno_repository_1.TurnoRepository])
], TurnoService);
exports.TurnoService = TurnoService;
//# sourceMappingURL=turno.service.js.map