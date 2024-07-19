import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI || "mongodb+srv://realirfanashraf:realirfanashraf@live-demo.t5kznbt.mongodb.net/?retryWrites=true&w=majority&appName=live-demo";
export const connectDB = async () => {
    try {
        await mongoose.connect(mongo_uri)
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};
