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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const registration_dto_1 = require("./dto/registration.dto");
const auth_service_1 = require("./auth.service");
const activation_account_dto_1 = require("./dto/activation.account.dto");
const signin_user_dto_1 = require("./dto/signin.user.dto");
const forgot_password_dto_1 = require("./dto/forgot.password.dto");
const reset_password_dto_1 = require("./dto/reset.password.dto");
const decorators_1 = require("../decorators");
const rt_guards_1 = require("./guard/rt.guards");
const role_auth_1 = require("../decorators/role.auth");
const role_enum_1 = require("../decorators/role.enum");
const role_guard_1 = require("./guard/role.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerUser(dto) {
        return this.authService.createUser(dto);
    }
    async activateUser(dto, res) {
        try {
            const tokens = await this.authService.activationAccount(dto);
            res.cookie('refresh_token', tokens.refresh_token, { httpOnly: true });
            res.send({ success: true, message: "account verified successfully" });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    signIn(credentials, res) {
        return this.authService.signin(credentials, res);
    }
    forgotPassword(dto) {
        return this.authService.forgotPassword(dto);
    }
    resetPassword(dto) {
        return this.authService.resetPassword(dto);
    }
    logout(response) {
        return this.authService.logout(response);
    }
    getUser(user) {
        return this.authService.myProfile(user['id']);
    }
    deleteUser(userId) {
        return this.authService.deleteAccount(userId['id']);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_dto_1.RegistrationUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)("activate"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activation_account_dto_1.ActivationAccountDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activateUser", null);
__decorate([
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_user_dto_1.SigninAuthDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPassword]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Patch)("reset-password"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPassword]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(rt_guards_1.RtGuard),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(rt_guards_1.RtGuard),
    (0, common_1.Get)("profile"),
    __param(0, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUser", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(rt_guards_1.RtGuard, role_guard_1.RolesGuard),
    (0, common_1.Delete)("delete-user"),
    __param(0, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "deleteUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map