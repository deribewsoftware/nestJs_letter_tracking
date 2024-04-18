"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const mailer_module_1 = require("../mailer/mailer.module");
const mailer_service_1 = require("../mailer/mailer.service");
const at_strategy_1 = require("./strategy/at.strategy");
const rt_strategy_1 = require("./strategy/rt.strategy");
const role_guard_1 = require("./guard/role.guard");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_module_1 = require("../prisma/prisma.module");
const permission_guard_1 = require("./guard/permission.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({}), mailer_module_1.MailerModule, jwt_1.JwtModule, prisma_module_1.PrismaModule],
        providers: [auth_service_1.AuthService, jwt_1.JwtService, mailer_service_1.MailerService, at_strategy_1.AtStrategy, rt_strategy_1.RtStrategy, role_guard_1.RolesGuard, prisma_service_1.PrismaService, permission_guard_1.PermissionGuard],
        controllers: [auth_controller_1.AuthController]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map