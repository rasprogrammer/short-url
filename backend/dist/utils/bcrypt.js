import bcrypt from "bcrypt";
export const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};
//# sourceMappingURL=bcrypt.js.map