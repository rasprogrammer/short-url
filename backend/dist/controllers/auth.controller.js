import { CreateUserSchema, UserLoginSchema } from "../validations/auth.js";
import User from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
export const register = async (req, res) => {
    try {
        // Validate user details
        const parsedData = CreateUserSchema.safeParse(req.body);
        if (!parsedData.success) {
            res.status(400).json({
                success: false,
                error: parsedData.error
            });
            return;
        }
        const { name, email, password } = parsedData.data;
        // check email already exists or not 
        const userExist = await User.findOne({
            email
        });
        if (userExist) {
            res.status(400).json({
                success: false,
                error: "User already exists"
            });
            return;
        }
        // hashed password 
        const hashedPassword = await hashPassword(password);
        // Create user 
        const newUser = await User.create({
            name,
            email,
            password_hash: hashedPassword
        });
        return res.status(201).json({
            success: true,
            message: "User register successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }
        });
    }
    catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
        return;
    }
};
export const login = async (req, res) => {
    try {
        // Validate login credentials 
        const parsedData = UserLoginSchema.safeParse(req.body);
        if (!parsedData.success) {
            res.status(400).json({
                success: false,
                error: parsedData.error
            });
            return;
        }
        const { email, password } = parsedData.data;
        // Check user exists in db or not 
        const user = await User.findOne({
            email,
        });
        if (!user) {
            res.status(401).json({
                success: false,
                error: "Invalid email or password "
            });
            return;
        }
        // Compare password 
        const isPasswordValid = await verifyPassword(password, user.password_hash);
        if (!isPasswordValid) {
            res.status(401).json({
                success: false,
                error: "Invalid email or password"
            });
            return;
        }
        const token = generateToken(user._id.toString());
        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            token
        });
    }
    catch (error) {
        console.log('Login Error: ', error);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
        return;
    }
};
//# sourceMappingURL=auth.controller.js.map