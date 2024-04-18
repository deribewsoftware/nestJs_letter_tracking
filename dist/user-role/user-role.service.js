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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserRoleService = class UserRoleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserRoleDto) {
        const newRole = await this.prisma.userRole.create({
            data: {
                userId: createUserRoleDto.userId,
                roleId: createUserRoleDto.roleId
            }
        });
        return newRole;
    }
    async findAll() {
        const userRoles = await this.prisma.userRole.findMany();
        return userRoles;
    }
    async findOne(id) {
        const userRole = await this.prisma.userRole.findUnique({ where: { id: id } });
        return userRole;
    }
    async update(id, updateUserRoleDto) {
        const userRole = await this.prisma.userRole.findUnique({ where: { id: id } });
        if (!userRole) {
            throw new common_1.ForbiddenException("userRole not found");
        }
        await this.prisma.userRole.update({ where: { id: id },
            data: {
                userId: updateUserRoleDto.userId,
                roleId: updateUserRoleDto.roleId
            }
        });
        return {
            success: true,
            messages: "User role updated successfully"
        };
    }
    async remove(id) {
        const userRole = await this.prisma.userRole.findUnique({ where: { id: id } });
        if (!userRole) {
            throw new common_1.ForbiddenException("userRole not found");
        }
        await this.prisma.userRole.delete({ where: { id: id },
        });
        return {
            success: true,
            messages: "User role deleted successfully"
        };
    }
};
exports.UserRoleService = UserRoleService;
exports.UserRoleService = UserRoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRoleService);
//# sourceMappingURL=user-role.service.js.map