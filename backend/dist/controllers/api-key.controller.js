export const generateApikey = async (req, res) => {
    try {
    }
    catch (error) {
        console.log("Generate api key error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
export const revokeApiKey = async (req, res) => {
    try {
    }
    catch (error) {
        console.log("Delete api key error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
//# sourceMappingURL=api-key.controller.js.map