"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const config_1 = require("../config");
async function transformPassword(user) {
    if (user.password) {
        user.password = await bcrypt.hash(user.password, config_1.config.get('jhipster.security.authentication.jwt.hash-salt-or-rounds'));
    }
    return Promise.resolve();
}
exports.transformPassword = transformPassword;
//# sourceMappingURL=password-util.js.map