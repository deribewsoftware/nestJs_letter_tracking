"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const mailer_module_1 = require("./mailer/mailer.module");
const document_module_1 = require("./document/document.module");
const prisma_service_1 = require("./prisma/prisma.service");
const user_module_1 = require("./user/user.module");
const role_module_1 = require("./role/role.module");
const permission_module_1 = require("./permission/permission.module");
const department_module_1 = require("./department/department.module");
const user_role_module_1 = require("./user-role/user-role.module");
const user_permission_module_1 = require("./user-permission/user-permission.module");
const organization_module_1 = require("./organization/organization.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, config_1.ConfigModule.forRoot({ isGlobal: true }), auth_module_1.AuthModule, mailer_module_1.MailerModule, document_module_1.DocumentModule, user_module_1.UserModule, role_module_1.RoleModule, permission_module_1.PermissionModule, department_module_1.DepartmentModule, user_role_module_1.UserRoleModule, user_permission_module_1.UserPermissionModule, organization_module_1.OrganizationModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map