import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({
    path: "../.env" // Adjust the path based on the actual location of your .env file
});

// Log the MONGO_URI to verify it is loaded correctly
console.log("MONGO_URI (database.js):", process.env.MONGO_URI);

const databaseConnection = () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error('MONGO_URI is not defined in environment variables');
    }

    mongoose.connect(mongoUri)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });
};

export default databaseConnection;
