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
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrganizationService = class OrganizationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const newOrganisation = await this.prisma.organization.create({
            data: {
                name: dto.name,
                logo: dto.logo || null,
                description: dto.description || null,
            }
        });
        return newOrganisation;
    }
    async findAll() {
        const organizations = await this.prisma.organization.findMany();
        return organizations;
    }
    async findOne(id) {
        const organization = await this.prisma.organization.findUnique({
            where: { id: id }
        });
        return organization;
    }
    async update(id, updateOrganizationDto) {
        const organization = await this.prisma.organization.findUnique({
            where: { id: id }
        });
        if (!organization)
            throw new Error(`Could not find organization`);
        await this.prisma.organization.update({
            where: { id: id },
            data: updateOrganizationDto
        });
        return {
            success: true,
            message: "Organization updated successfully"
        };
    }
    async remove(id) {
        const organization = await this.prisma.organization.findUnique({
            where: { id: id }
        });
        if (!organization)
            throw new Error(`Could not find organization`);
        await this.prisma.organization.delete({
            where: { id: id },
        });
        return {
            success: true,
            message: "Organization deleted successfully"
        };
    }
};
exports.OrganizationService = OrganizationService;
exports.OrganizationService = OrganizationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrganizationService);
//# sourceMappingURL=organization.service.js.map