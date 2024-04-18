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
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DocumentService = class DocumentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDocumentDto, userId) {
        const newDocument = this.prisma.document.create({
            data: {
                title: createDocumentDto.title,
                description: createDocumentDto.description,
                departmentId: createDocumentDto.departmentId,
                creatorId: userId
            }
        });
        return newDocument;
    }
    async findAll() {
        const documents = await this.prisma.document.findMany({});
        return documents;
    }
    async findOne(id) {
        const document = await this.prisma.document.findUnique({ where: { id: id } });
        if (!document) {
            throw new common_1.ForbiddenException("Document not found");
        }
        return document;
    }
    async update(id, updateDocumentDto) {
        const document = await this.prisma.document.findUnique({ where: { id: id } });
        if (!document) {
            throw new common_1.ForbiddenException("Document does't exist");
        }
        await this.prisma.document.update({
            where: { id: id },
            data: updateDocumentDto
        });
        return { message: "Document updated successfully" };
    }
    async remove(id) {
        const document = await this.prisma.document.findUnique({ where: { id: id } });
        if (!document) {
            throw new common_1.ForbiddenException("Document does't exist");
        }
        await this.prisma.document.delete({ where: { id: id } });
        return { message: "document deleted successfully" };
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentService);
//# sourceMappingURL=document.service.js.map