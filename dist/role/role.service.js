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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RoleService = class RoleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRoleDto) {
        const newRole = await this.prisma.role.create({
            data: createRoleDto
        });
        return newRole;
    }
    async findAll() {
        const roleLists = await this.prisma.role.findMany();
        return roleLists;
    }
    async findOne(id) {
        const role = await this.prisma.role.findUnique({
            where: { id: id }
        });
        return role;
    }
    async update(id, updateRoleDto) {
        const role = await this.prisma.role.findUnique({ where: { id: id } });
        if (!role) {
            throw new common_1.ForbiddenException("Role not found");
        }
        await this.prisma.role.update({
            where: { id: id },
            data: updateRoleDto
        });
        return {
            succes: true,
            message: "Role updated successfully"
        };
    }
    async remove(id) {
        const role = await this.prisma.role.findUnique({ where: { id: id } });
        if (!role) {
            throw new common_1.ForbiddenException("Role not found");
        }
        await this.prisma.role.delete({
            where: { id: id },
        });
        return {
            succes: true,
            message: "Role deleted successfully"
        };
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
//# sourceMappingURL=role.service.js.map