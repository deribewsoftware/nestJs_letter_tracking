"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailerOption = void 0;
const verifty_account_template_1 = require("./mails/verifty-account.template");
const mailerOption = (email, activationCode, token) => {
    const mailerOptions = {
        from: {
            name: `Deribew Shimelis`,
            address: `deribewsoftware@gmail.com`,
        },
        to: email,
        subject: `Verify Your Email`,
        html: (0, verifty_account_template_1.verifyAccountTemplate)(activationCode, token)
    };
    return mailerOptions;
};
exports.mailerOption = mailerOption;
//# sourceMappingURL=account.verification.js.map