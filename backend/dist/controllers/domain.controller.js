import { AddDomainSchema, VerifyDomainSchema } from "../validations/domain.js";
import Domain from "../models/domainModel.js";
export const addDomain = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const parsedData = AddDomainSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400).json({
                success: false,
                error: parsedData.error
            });
        }
        const { domain_name } = parsedData.data;
        const domain = await Domain.create({
            domain_name,
            user_id: userId
        });
        return res.status(201).json({
            success: true,
            message: "Please add DNS record to verify domain",
            data: {
                id: domain._id,
                domain_name,
                is_verified: false,
                verification: {
                    type: "CNAME",
                    host: "go",
                    value: "yourapp.com"
                }
            }
        });
    }
    catch (error) {
        console.log("Domain add error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
export const verifyDomain = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const domainId = req.params.id;
        if (!domainId) {
            return res.status(404).json({
                success: false,
                error: "Domain id not provided"
            });
        }
        const domain = await Domain.findOne({
            _id: domainId,
            user_id: userId
        });
        if (!domain) {
            return res.status(404).json({
                success: false,
                error: "Domain not found"
            });
        }
        return res.status(201).json({
            success: true,
            message: "Domain verified successfully",
            data: {
                id: domain._id,
                domain_name: domain.domain_name,
                is_verified: domain.is_verified,
            }
        });
    }
    catch (error) {
        console.log("Domain verification error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
export const getAllDomain = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const domains = await Domain.find({
            user_id: userId
        });
        return res.status(200).json({
            success: true,
            message: "All domains fetched successfully",
            data: {
                domains
            }
        });
    }
    catch (error) {
        console.log("Get Domain error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
export const deleteDomain = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const domainId = req.params.id;
        if (!domainId) {
            return res.status(404).json({
                success: false,
                error: "Domain id not provided"
            });
        }
        const domain = await Domain.findOne({
            _id: domainId,
            user_id: userId
        });
        if (!domain) {
            return res.status(404).json({
                success: false,
                error: "Domain not found"
            });
        }
        await Domain.deleteOne({
            _id: domain._id
        });
        return res.status(200).json({
            success: true,
            message: "Domain deleted successfully",
        });
    }
    catch (error) {
        console.log("Delete Domain error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
//# sourceMappingURL=domain.controller.js.map