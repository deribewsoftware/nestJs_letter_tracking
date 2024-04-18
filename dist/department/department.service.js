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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DepartmentService = class DepartmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDepartmentDto, organizationId) {
        const newDepartment = await this.prisma.department.create({
            data: { ...createDepartmentDto, organizationId: organizationId }
        });
        return newDepartment;
    }
    async findAll() {
        const departments = await this.prisma.department.findMany();
        return departments;
    }
    async findOne(id) {
        const department = await this.prisma.department.findUnique({ where: { id: id } });
        return department;
    }
    async update(id, updateDepartmentDto) {
        const department = await this.prisma.department.findUnique({ where: { id: id } });
        if (!department) {
            throw new common_1.ForbiddenException("department not found");
        }
        await this.prisma.department.update({
            where: { id: id },
            data: updateDepartmentDto
        });
        return {
            success: true,
            message: "Departments updated successfully"
        };
    }
    async remove(id) {
        const department = await this.prisma.department.findUnique({ where: { id: id } });
        if (!department) {
            throw new common_1.ForbiddenException("department not found");
        }
        await this.prisma.department.delete({
            where: { id: id },
        });
        return {
            success: true,
            message: "Departments deleted successfully"
        };
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentService);
//# sourceMappingURL=department.service.js.map