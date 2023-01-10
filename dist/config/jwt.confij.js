"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJWTConfig = void 0;
const getJWTConfig = async (configService) => ({
    secret: configService.get('JWT_SECRET'),
});
exports.getJWTConfig = getJWTConfig;
//# sourceMappingURL=jwt.confij.js.map