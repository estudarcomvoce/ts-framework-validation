"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidId_1 = require("./isValidId");
exports.isValidId = isValidId_1.default;
const isValidName_1 = require("./isValidName");
const isValidEmail_1 = require("./isValidEmail");
exports.isValidEmail = isValidEmail_1.default;
const isValidUsername_1 = require("./isValidUsername");
const isValidPassword_1 = require("./isValidPassword");
exports.isValidPassword = isValidPassword_1.default;
const isValidPhoneNumber_1 = require("./isValidPhoneNumber");
exports.isValidPhoneNumber = isValidPhoneNumber_1.default;
/**
 * Exports the available param validators as middlewares
 */
exports.default = {
    isValidId: isValidId_1.default,
    isValidName: isValidName_1.default,
    isValidEmail: isValidEmail_1.default,
    isValidUsername: isValidUsername_1.default,
    isValidPassword: isValidPassword_1.default,
    isValidPhoneNumber: isValidPhoneNumber_1.default,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcGFyYW1zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9DO0FBUTNCLG9CQVJGLG1CQUFTLENBUUU7QUFQbEIsK0NBQXdDO0FBQ3hDLGlEQUEwQztBQU10Qix1QkFOYixzQkFBWSxDQU1hO0FBTGhDLHVEQUFnRDtBQUNoRCx1REFBZ0Q7QUFJZCwwQkFKM0IseUJBQWUsQ0FJMkI7QUFIakQsNkRBQXNEO0FBR0gsNkJBSDVDLDRCQUFrQixDQUc0QztBQUVyRTs7R0FFRztBQUNILGtCQUFlO0lBQ2IsU0FBUyxFQUFULG1CQUFTO0lBQ1QsV0FBVyxFQUFYLHFCQUFXO0lBQ1gsWUFBWSxFQUFaLHNCQUFZO0lBQ1osZUFBZSxFQUFmLHlCQUFlO0lBQ2YsZUFBZSxFQUFmLHlCQUFlO0lBQ2Ysa0JBQWtCLEVBQWxCLDRCQUFrQjtDQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzVmFsaWRJZCBmcm9tICcuL2lzVmFsaWRJZCc7XG5pbXBvcnQgaXNWYWxpZE5hbWUgZnJvbSAnLi9pc1ZhbGlkTmFtZSc7XG5pbXBvcnQgaXNWYWxpZEVtYWlsIGZyb20gJy4vaXNWYWxpZEVtYWlsJztcbmltcG9ydCBpc1ZhbGlkVXNlcm5hbWUgZnJvbSAnLi9pc1ZhbGlkVXNlcm5hbWUnO1xuaW1wb3J0IGlzVmFsaWRQYXNzd29yZCBmcm9tICcuL2lzVmFsaWRQYXNzd29yZCc7XG5pbXBvcnQgaXNWYWxpZFBob25lTnVtYmVyIGZyb20gJy4vaXNWYWxpZFBob25lTnVtYmVyJztcbmltcG9ydCB7IFBhcmFtVmFsaWRhdG9yLCBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUgfSBmcm9tICdpbmRleCc7XG5cbmV4cG9ydCB7IGlzVmFsaWRJZCwgaXNWYWxpZEVtYWlsLCBpc1ZhbGlkUGFzc3dvcmQsIGlzVmFsaWRQaG9uZU51bWJlciB9O1xuXG4vKipcbiAqIEV4cG9ydHMgdGhlIGF2YWlsYWJsZSBwYXJhbSB2YWxpZGF0b3JzIGFzIG1pZGRsZXdhcmVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNWYWxpZElkLFxuICBpc1ZhbGlkTmFtZSxcbiAgaXNWYWxpZEVtYWlsLFxuICBpc1ZhbGlkVXNlcm5hbWUsXG4gIGlzVmFsaWRQYXNzd29yZCxcbiAgaXNWYWxpZFBob25lTnVtYmVyLFxufTtcbiJdfQ==