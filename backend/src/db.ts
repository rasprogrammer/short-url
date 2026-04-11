import mongoose from "mongoose";

export const mongoDbConnect = async (DATABASE_URL: string) => {
    mongoose.connect(DATABASE_URL)
        .then(() => console.log('mongoDB Connected!'))
        .catch((err) => console.log('Error', err));
}

