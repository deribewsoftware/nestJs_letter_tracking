"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserId = void 0;
const common_1 = require("@nestjs/common");
exports.GetUserId = (0, common_1.createParamDecorator)((_, context) => {
    const request = context.switchToHttp().getRequest();
    const user = request;
    console.log(user);
    return user.id;
});
//# sourceMappingURL=getuser.id.js.map