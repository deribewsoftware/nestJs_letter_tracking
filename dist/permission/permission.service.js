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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PermissionService = class PermissionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPermissionDto) {
        const newPermission = await this.prisma.permission.create({
            data: {
                roleId: createPermissionDto.roleId,
                action: createPermissionDto.action
            }
        });
        return newPermission;
    }
    async findAll() {
        const permissions = await this.prisma.permission.findMany();
        return permissions;
    }
    async findOne(id) {
        const permission = await this.prisma.permission.findUnique({ where: { id: id } });
        return permission;
    }
    async update(id, updatePermissionDto) {
        const permission = await this.prisma.permission.findUnique({ where: { id: id } });
        if (!permission) {
            throw new common_1.ForbiddenException("Permission not found");
        }
        await this.prisma.permission.update({
            where: { id: id },
            data: updatePermissionDto
        });
        return {
            success: true,
            message: "Permission updated successfully"
        };
    }
    async remove(id) {
        const permission = await this.prisma.permission.findUnique({ where: { id: id } });
        if (!permission) {
            throw new common_1.ForbiddenException("Permission not found");
        }
        await this.prisma.permission.delete({
            where: { id: id },
        });
        return {
            success: true,
            message: "Permission deleted successfully"
        };
    }
};
exports.PermissionService = PermissionService;
exports.PermissionService = PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermissionService);
//# sourceMappingURL=permission.service.js.map