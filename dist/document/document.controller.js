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
exports.DocumentController = void 0;
const common_1 = require("@nestjs/common");
const document_service_1 = require("./document.service");
const create_document_dto_1 = require("./dto/create-document.dto");
const update_document_dto_1 = require("./dto/update-document.dto");
const role_auth_1 = require("../decorators/role.auth");
const rt_guards_1 = require("../auth/guard/rt.guards");
const role_enum_1 = require("../decorators/role.enum");
const role_guard_1 = require("../auth/guard/role.guard");
const decorators_1 = require("../decorators");
let DocumentController = class DocumentController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    create(createDocumentDto, user) {
        return this.documentService.create(createDocumentDto, user['id']);
    }
    findAll() {
        return this.documentService.findAll();
    }
    findOne(id) {
        return this.documentService.findOne(id);
    }
    update(id, updateDocumentDto) {
        return this.documentService.update(id, updateDocumentDto);
    }
    remove(id) {
        return this.documentService.remove(id);
    }
};
exports.DocumentController = DocumentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto, Object]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "remove", null);
exports.DocumentController = DocumentController = __decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(rt_guards_1.RtGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('document'),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentController);
//# sourceMappingURL=document.controller.js.map