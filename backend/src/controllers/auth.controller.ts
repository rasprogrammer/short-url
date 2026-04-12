import type { Request, Response } from "express";
import { CreateUserSchema } from "../validations/auth.js";
import User from "../models/userModel.js";
import { hashPassword } from "../utils/bcrypt.js";


export const register = async (req: Request, res: Response) => {
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

        console.log('userExist > ', userExist);

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
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ 
            success: false, 
            error: "Internal server error" 
        });
        return;
    }
};


export const login = async () => {

};