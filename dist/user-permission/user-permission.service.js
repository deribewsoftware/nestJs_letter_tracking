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
exports.UserPermissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserPermissionService = class UserPermissionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserPermissionDto) {
        const newUserPermission = await this.prisma.userPermission.create({
            data: {
                userId: createUserPermissionDto.userId,
                permissionId: createUserPermissionDto.permissionId
            }
        });
        return newUserPermission;
    }
    async findAll() {
        const userPermissions = await this.prisma.userPermission.findMany();
        return userPermissions;
    }
    async findOne(id) {
        const userPermission = await this.prisma.userPermission.findUnique({ where: { id: id } });
        return userPermission;
    }
    async update(id, updateUserPermissionDto) {
        const userPermission = await this.prisma.userPermission.findUnique({ where: { id: id } });
        if (!userPermission) {
            throw new common_1.ForbiddenException("User permission not found");
        }
        await this.prisma.userPermission.update({
            where: { id: id },
            data: {
                userId: updateUserPermissionDto.userId,
                permissionId: updateUserPermissionDto.permissionId
            }
        });
        return {
            success: true,
            messages: "Permission updated successfully"
        };
    }
    async remove(id) {
        const userPermission = await this.prisma.userPermission.findUnique({ where: { id: id } });
        if (!userPermission) {
            throw new common_1.ForbiddenException("User permission not found");
        }
        await this.prisma.userPermission.delete({
            where: { id: id },
        });
        return {
            success: true,
            messages: "Permission deleted successfully"
        };
    }
};
exports.UserPermissionService = UserPermissionService;
exports.UserPermissionService = UserPermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserPermissionService);
//# sourceMappingURL=user-permission.service.js.map