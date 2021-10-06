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
const user_mapper_1 = require("./mapper/user.mapper");
const user_repository_1 = require("../repository/user.repository");
const security_1 = require("../security");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findById(id) {
        const result = await this.userRepository.findOne(id);
        return user_mapper_1.UserMapper.fromEntityToDTO(this.flatAuthorities(result));
    }
    async findByFields(options) {
        const result = await this.userRepository.findOne(options);
        return user_mapper_1.UserMapper.fromEntityToDTO(this.flatAuthorities(result));
    }
    async getRandomUser(options) {
        // const usersCount = await this.userRepository.count(options);
        // const randomID = Math.floor(Math.random()*usersCount);
        // const result = await this.userRepository.findOne(options);
        // return UserMapper.fromEntityToDTO(this.flatAuthorities(result));
        const [results, count] = await this.userRepository.findAndCount(options);
        const randomIndex = Math.floor(Math.random() * count);
        return user_mapper_1.UserMapper.fromEntityToDTO(this.flatAuthorities(results[randomIndex]));
    }
    async find(options) {
        const result = await this.userRepository.findOne(options);
        return user_mapper_1.UserMapper.fromEntityToDTO(this.flatAuthorities(result));
    }
    async findAndCount(options) {
        const resultList = await this.userRepository.findAndCount(options);
        const usersDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(user => usersDTO.push(user_mapper_1.UserMapper.fromEntityToDTO(this.flatAuthorities(user))));
            resultList[0] = usersDTO;
        }
        return resultList;
    }
    async save(userDTO, creator, updatePassword = false) {
        const user = this.convertInAuthorities(user_mapper_1.UserMapper.fromDTOtoEntity(userDTO));
        if (updatePassword) {
            await security_1.transformPassword(user);
        }
        if (creator) {
            if (!user.createdBy) {
                user.createdBy = creator;
            }
            user.lastModifiedBy = creator;
        }
        const result = await this.userRepository.save(user);
        return user_mapper_1.UserMapper.fromEntityToDTO(this.flatAuthorities(result));
    }
    async update(userDTO, updater) {
        return this.save(userDTO, updater);
    }
    async delete(userDTO) {
        const user = user_mapper_1.UserMapper.fromDTOtoEntity(userDTO);
        const result = await this.userRepository.remove(user);
        return user_mapper_1.UserMapper.fromEntityToDTO(result);
    }
    flatAuthorities(user) {
        if (user && user.authorities) {
            const authorities = [];
            user.authorities.forEach(authority => authorities.push(authority.name));
            user.authorities = authorities;
        }
        return user;
    }
    convertInAuthorities(user) {
        if (user && user.authorities) {
            const authorities = [];
            user.authorities.forEach(authority => authorities.push({ name: authority }));
            user.authorities = authorities;
        }
        return user;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map